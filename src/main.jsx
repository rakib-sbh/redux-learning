import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import todosStore from "./components/stores/todosStore.js";
import App from "./app.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={todosStore}>
    <App />
  </Provider>
);
