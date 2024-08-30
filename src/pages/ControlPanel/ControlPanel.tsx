import Title from "../../components/Title"
import StatusIndicator from "../../components/StatusIndicator"
import Counter from "../../components/Counter/Counter"
import './ControlPanel.css'
import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"
import type { Lampadaire, LampadairesStatus } from "../../types"
function ControlPanel() {
  const { lampadaires } = useContext(AppContext)

  function getLampadairesStatus(lampadaires : Lampadaire[]):LampadairesStatus{
    const on = lampadaires.filter(l => l.isAllume).length
    const off = lampadaires.filter(l => !l.isAllume).length
    const ko = lampadaires.filter(l => l.isKO).length
    return { on:on, off:off, ko:ko}
  }
  const {on, off, ko} =(getLampadairesStatus(lampadaires))

  return (
    <div className="control-panel">
      <Title text="Panneau de contrôle" />
      <div>
        <StatusIndicator text="Actif" color="success" />
        <Counter value={on} />
      </div>
      <div>
        <StatusIndicator text="Éteint" color="warning" />
        <Counter value={off} />
      </div>
      <div>
        <StatusIndicator text="Défectueux" color="error" />
        <Counter value={ko} />
      </div>
    </div>
  )
}

export default ControlPanel