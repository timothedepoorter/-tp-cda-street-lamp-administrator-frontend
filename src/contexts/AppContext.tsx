import { createContext } from "react"
import { Context } from "../types"
const context: Context = {
    lampadaires: [],
    utilisateurs: [],
    horaires: [],
    capteurs: [],
    error: ""
}
export const AppContext = createContext(context)