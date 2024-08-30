
import { RouterProvider} from 'react-router-dom'
import { createBrowserRouter, Outlet } from "react-router-dom"
import ControlPanel from "./pages/ControlPanel.tsx"
import NavBar from "./components/NavBar/NavBar.tsx";
import { AppContext } from "./contexts/AppContext.tsx";
import { useData } from "./hooks/useData"
import { Utilisateur } from "./types";

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
          element: <p>home</p>,
        },
        {
          path: '/control-panel',
          element: <ControlPanel />,
        }
      ],
    },
    {
      path: "/login",
      element: <p>login</p>,
    }
  ])
  
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}






export default App
