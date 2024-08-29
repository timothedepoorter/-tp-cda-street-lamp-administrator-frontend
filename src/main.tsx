import { StrictMode } from 'react'
// import {AppContext} from './contexts/AppContext';
import { createRoot } from 'react-dom/client'
import {Router} from './components/Router'

import './index.css'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  // <AppContext.Provider value={useData()}>
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
  // </AppContext.Provider>
)
