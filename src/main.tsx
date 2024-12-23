import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import GlobalCss from "./components/GlobalCSS/GlobalCss.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalCss>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalCss>
);
