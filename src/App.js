import { Counter } from "./Counter";
import Footer from "./Footer";
import { Jokess } from "./Jokess";
import { Container } from "reactstrap";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Counter />
        <br></br>
        <Jokess />
      </Container>
    </Provider>
  );
}

export default App;
