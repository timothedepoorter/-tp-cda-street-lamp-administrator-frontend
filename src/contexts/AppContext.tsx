import { createContext } from "react"
import { Context } from "../types"
const context: Context = {
    lampadaires: [],
    horaires: [],
    capteurs: [],    
}
export const AppContext = createContext(context)