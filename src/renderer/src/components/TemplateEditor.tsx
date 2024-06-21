import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin
} from '@mdxeditor/editor'
import { useSelectedTemplate, useTemplateStoreActions } from '@renderer/store/templateStore'
import { autoSavingTime } from '@shared/constants'
import { logger } from '@shared/logger'
import { TemplateContent } from '@shared/models'
import { throttle } from 'lodash'
import { useRef } from 'react'

export function TemplateEditor() {
  const { title, content } = useSelectedTemplate()
  const actions = useTemplateStoreActions()
  const editorRef = useRef<MDXEditorMethods>(null)

  const handleAutoSaving = throttle(
    async (content: TemplateContent) => {
      if (!title) return

      logger.info('auto saving', title)

      await actions.updateTemplate(title, content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!title) return

    handleAutoSaving.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      await actions.updateTemplate(title, content)
    }
  }

  return (
    <MDXEditor
      key={title}
      ref={editorRef}
      markdown={content}
      onChange={handleAutoSaving}
      onBlur={handleBlur}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 prose dark:prose-invert"
    />
  )
}
