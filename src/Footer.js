import React from "react";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const veri = useSelector((state) => state.counter.value);
  return <Container>value from global : {veri}</Container>;
}

export default Footer;
