import { Counter } from "./counter";
import Footer from "./Footer";
import { Jokess } from "./Jokess";
import { Container } from "reactstrap";
// birader bu nasil import??
// import { store } from "/Users/macmini/Desktop/RTK_COUNTER/src/app/store.js";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { jokesApi } from "./query/apiSlice";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={jokesApi}>
        <Container>
          
          <br></br>
          <Jokess />
        </Container>
      </ApiProvider>
    </Provider>
  );
}

export default App;
