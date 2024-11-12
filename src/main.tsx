import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

// CSS
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

// Providers
import ModulesProvider from "@common/domain/providers/ModulesProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModulesProvider/>
  </StrictMode>,
)
