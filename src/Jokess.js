import { jokesApi, useGetJokesQuery } from "./query/apiSlice";
import { useSelector, useDispatch } from 'react-redux'
import { addNumber,removeNumber } from "./counter/counterSlice";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Jokess = () => {
  const { data, isLoading, isError, isFetching, refetch } = useGetJokesQuery();
  const randomNumberArray = useSelector((state) => state.counter.kenanArray)
  const dispatch = useDispatch()
  // console.log("burasi antep", data);
  if (isLoading) return <div>Loading</div>;
  if (isFetching) return <div>Yenisi cekiliyor</div>;
  // if (isError) return <div>{error}</div>;
  console.log(randomNumberArray);
  return (
    <Container>
      <button
        aria-label="get Jokes"
        onClick={() => refetch()}
      >
        get jokes
      </button>
      
      <br></br>
      value from global : {data.value}
      <br></br>
      <button
        aria-label="get random number"
        onClick={() => dispatch(addNumber())}
      >
        add number
      </button>
      <button
        aria-label="get random number"
        onClick={() => dispatch(removeNumber())}
      >
        remove number
      </button>
      <br></br>
      value from global : 
      {randomNumberArray.map((value, idx) => {
        return <span key={idx}>{value},</span>
      })}
    </Container>
  );
};
