import { useEffect, useRef } from 'react'
import {
  ActionButtonsRow,
  Content,
  CopyFormButton,
  CreateTemplateButton,
  DeleteTemplateButton,
  ExportFormButton,
  RefreshTemplatesButton,
  ResetFormButton,
  ResizableHandle,
  RootLayout,
  Sidebar,
  TemplateEditor,
  TemplateForm,
  TemplatePreviewList,
  TemplateTitle
} from './components'
import { useTemplateStoreActions } from './store/templateStore'

export default function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  const actions = useTemplateStoreActions()

  useEffect(() => {
    actions.readTemplates()
  }, [])

  return (
    <RootLayout direction="horizontal">
      <Sidebar minSize={15} defaultSize={15} className="p-2">
        <ActionButtonsRow>
          <div className="flex space-x-2">
            <CreateTemplateButton />
            <RefreshTemplatesButton />
          </div>
          <div>
            <DeleteTemplateButton />
          </div>
        </ActionButtonsRow>
        <TemplatePreviewList onSelect={resetScroll} />
      </Sidebar>

      <ResizableHandle />

      <Content
        ref={contentContainerRef}
        minSize={5}
        defaultSize={70}
        className="flex flex-col border-l bg-background overflow-auto"
      >
        <TemplateTitle />
        <TemplateEditor />
      </Content>

      <ResizableHandle />

      <Sidebar minSize={15} defaultSize={15}>
        <TemplateForm />
        <ActionButtonsRow className="p-2">
          <div className="flex space-x-2">
            <CopyFormButton />
            <ExportFormButton />
          </div>
          <div>
            <ResetFormButton />
          </div>
        </ActionButtonsRow>
      </Sidebar>
    </RootLayout>
  )
}
