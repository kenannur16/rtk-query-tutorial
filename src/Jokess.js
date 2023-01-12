import { useGetJokesQuery } from "./query/apiSlice";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Jokess = () => {
  const { data } = useGetJokesQuery();
  console.log("burasi antep", data.value);
  return <Container>value from global : {data.value} </Container>;
};
