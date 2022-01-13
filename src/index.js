import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
console.log(store.getState());
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
