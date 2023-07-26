import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./input.css";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(<App />);
