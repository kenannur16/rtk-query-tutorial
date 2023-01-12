import { useGetJokesQuery } from "./query/apiSlice";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Jokess() {
  // TODO: asagida tanimladigim refetch metodunu bi bak docstan
  const { data, error, isLoading, isError, isFetching, refetch } =
    useGetJokesQuery();
  console.log("burasi antep", data);

  // sorun su ki. http requesti beklemeden okumaya calisiyordun.
  // 'data' o esnada undefined birsey oldugu icin uzerinden erismeye calistigin hersey hata verdirecekti.
  // bunu asmanin bir yolu 'optional operator' kullanmak.
  // asagidakini deneyebilirsin.
  //
  // return <Container>value from global : {data?.value} </Container>;

  // burdan sonrasi benim yeni eklediklerim.
  // there is another way to tackle that http problems. rtk-query dokumantasyonunu oku awk azck :D
  // useGetJokesQuery icerisinde cozum.

  if (isLoading) return <div>Loading</div>;
  if (isFetching) return <div>Yenisi cekiliyor</div>;
  if (isError) return <div>{error}</div>;

  return <Container>value from global : {data.value} </Container>;
}
