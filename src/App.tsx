
import { RouterProvider} from 'react-router-dom'
import { createBrowserRouter, Outlet } from "react-router-dom"
import ControlPanel from "./pages/ControlPanel/ControlPanel.tsx"
import NavBar from "./components/NavBar/NavBar.tsx";
import { AppContext } from "./contexts/AppContext.tsx";
import { useData } from "./hooks/useData"
import { Utilisateur } from "./types";
import DetailsView from './pages/DetailsView/DetailsView.tsx';
import ListView from './pages/ListView/ListView.tsx';
import Login from './pages/Login/Login.tsx';
import { Button } from './components/Button.tsx';

function App() {
  const context = useData();
  const userBidon:Utilisateur = {
    identifiant: "Georges",
    motDePasse: "abcdef",
    id: ''
  }
  
  function MainLayout () {
    return(
    <>
      <NavBar loggedUser={userBidon}/>
      <AppContext.Provider value={context}>         
      <Outlet />
      </AppContext.Provider>  
    </>
    )
  };
  
  
   const Router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <>
          <Button linkTo={"/login"} label={"Login"}/>
          <Button linkTo={"control-panel"} label={"Panneau de contrôle"}/>
          <Button linkTo={"/list-view"} label={"Vue liste"}/>      
          </>,
        },
        {
          path: '/control-panel',
          element: <ControlPanel />,
        },
        {
          path: '/lampadaire/:id',
          element: <DetailsView />,
        },
          {
          path: '/list-view',
          element: <ListView />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    }
  ])
  
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
