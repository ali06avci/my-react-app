import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//ReactDOM.render is no longer supported in React 18. Use createRoot instead.
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */
