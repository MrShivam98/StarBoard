import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { MyContextProvider } from './useContext.jsx';
import './index.css'
import App from './App.jsx'
import ErrorBoundary from "./components/errorBoundary.jsx"
import Err from "./components/err.jsx"
import NotFound from "./pages/notFound.jsx"
import Home from './pages/home.jsx';
import Pipeline from './pages/pipeline.jsx';
import Uploader from './pages/uploader.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={Err}>
        <MyContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path='/pipeline' element={<Pipeline />} />
              <Route path="/pipeline/:index" element={<Pipeline />} />
              <Route path='/upload' element={<Uploader />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MyContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
)
