<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# StarBoard

StarBoard is a React-based web application designed to manage and visualize real estate deal pipelines. It allows users to upload, edit, and download deal data in JSON and Excel formats, as well as view property details with embedded Google Maps.

## Features

- **Deal Pipeline Management**: Add, edit, and view real estate deals.
- **File Upload**: Upload deal data in JSON format.
- **Excel Export**: Download deal data as an Excel file.
- **OM Download**: Download a pre-defined Offering Memorandum (OM) PDF.
- **Dark Mode**: Toggle between light and dark themes.
- **Error Handling**: Graceful error handling with a fallback UI.

## Project Structure

```
├── public/
│   └── OM.pdf
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── useContext.jsx
│   ├── components/
│   │   ├── cards
│   │   ├── err.jsx
│   │   ├── errorBoundary.jsx
│   │   ├── modal
│   │   └── navbar.jsx
│   ├── pages/
│   │   ├── home.jsx
│   │   ├── notFound.jsx
│   │   ├── pipeline.jsx
│   │   └── uploader.jsx
├── sampleData.json
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd starboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build for Production
Build the project for production:
```bash
npm run build
```

### Preview Production Build
Preview the production build:
```bash
npm run preview
```

### Linting
Run ESLint to check for code issues:
```bash
npm run lint
```

## Dependencies

- **React**: Frontend library for building user interfaces.
- **React Router**: For routing and navigation.
- **React Toastify**: For toast notifications.
- **TailwindCSS**: For styling.
- **XLSX**: For Excel file generation.

## Development Dependencies

- **Vite**: Build tool for fast development.
- **ESLint**: For linting JavaScript and JSX files.
- **@vitejs/plugin-react**: React plugin for Vite.

## File Descriptions

- **`src/main.jsx`**: Entry point of the application.
- **`src/App.jsx`**: Main layout with a navbar and routing.
- **`src/pages/`**: Contains individual pages like Home, Pipeline, Uploader, and NotFound.
- **`src/components/`**: Reusable components like Navbar, Modal, and ErrorBoundary.
- **`src/useContext.jsx`**: Context provider for managing shared state.
- **`sampleData.json`**: Sample deal data for initial setup.

## License

This project is licensed under the MIT License.
