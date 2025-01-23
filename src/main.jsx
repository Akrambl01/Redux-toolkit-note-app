import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/GlobalStyles.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
