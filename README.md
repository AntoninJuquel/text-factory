# Text Factory

Text Factory is an Electron application built with Vite, React, and TypeScript designed to streamline the process of generating text based on pre-made templates. These templates are written in Markdown and can contain several placeholders `{{key}}`.

The app dynamically generates a form to replace each unique key with a custom value, allowing users to quickly create customized cover letters, emails, and other repetitive text-based documents. The filled templates can then be exported or copied to the clipboard.

Templates are stored locally on the user's machine in it's home directory.

- windows: `%USERPROFILE%/TextFactory`
- macOS: `~/TextFactory`
- linux: `~/.TextFactory`

## Screenshot

![image](https://github.com/AntoninJuquel/text-factory/assets/57025128/59d3f209-7de0-4804-8200-338ba4c1b505)

## Features

- Create and manage text templates
- Fill templates with custom values
- Export filled templates to a file
- Copy filled templates to the clipboard

## Realease

You can download the latest release of Text Factory [here](https://github.com/AntoninJuquel/text-factory/releases).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See the deployment section for notes on how to deploy the project on a live system.

### Prerequisites

You will need to have the following software installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

Install Node.js and npm from the [official website](https://nodejs.org/).

### Installing

Follow these steps to get the development environment running:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AntoninJuquel/text-factory.git
   cd text-factory
   ```

2. **Install the dependencies**:

   ```bash
   yarn install
   ```

3. **Start the Electron Vite development server**:

   ```bash
   yarn dev
   ```

You should now see the Text Factory application window.

## Running the tests

To run the automated tests for this system, you can use the following commands:

### Coding style tests

Coding style tests ensure that the codebase adheres to the specified linting rules and code style guidelines.

```bash
yarn lint
yarn format
```

These command will run a linter against your code to identify and fix style issues.

### Typescript type checking

To check the typescript types, run the following command:

```bash
yarn typecheck
```

This will check the typescript types and report any errors or warnings.

## Deployment

To build the project for deployment on a live system, follow these steps:

1. **Make sure the tests pass**:

   Before building the application, make sure that all tests pass and the codebase is clean and that there are no warnings or errors.

   ```bash
   yarn lint
   yarn typecheck
   ```

2. **Build the application for a specific platform**:

   - Windows:

   ```bash
   yarn build:win
   ```

   - macOS:

   ```bash
   yarn build:mac
   ```

   - Linux:

   ```bash
   yarn build:linux
   ```

This will create a packaged version of the Text Factory application that you can distribute and install on other machines.

## Built With

- [Vite](https://vitejs.dev/) - The build tool used
- [React](https://reactjs.org/) - Frontend library
- [Electron](https://www.electronjs.org/) - Framework for building cross-platform desktop apps
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Versioning

For the versions available, see the [tags on this repository](https://github.com/AntoninJuquel/text-factory/tags).

## Authors

- **Antonin Juquel** - _Entire App_ - [AntoninJuquel](https://github.com/AntoninJuquel)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Shoutout to [electron-vite](https://electron-vite.org) for making the development process so much faster and more enjoyable.
- Thanks to [shadcdn](https://ui.shadcn.com/) for the accessible, customizable and open source beautiful components.
- Amazing Electron tutorial by [Gionatha](https://www.youtube.com/watch?v=t8ane4BDyC8)
