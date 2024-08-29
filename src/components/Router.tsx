// import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from "react-router-dom"
// import {Home} from "./Home"
import App from '../App.tsx'
export const Router = createBrowserRouter([
  {path:"/", element: <App /> },
// {path:"/2", element: <Page2 />},
// {path:"/detail", element: <Detail />},
// {path:"/detail/:id", element: <Detail />},
// {path: "*", element: <ErrorPage />},
  ])