import ReactDOM from "react-dom/client"
import { DomFixtureLoader } from "vite-plugin-react-cosmos/client"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DomFixtureLoader />
)
