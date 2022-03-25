import React from "react";
import styled from "styled-components";

const Promo = styled.p`
  box-sizing: border-box;
  font-family: "Rockwell", sans-serif;
  color: #eceff1;
  background: #FF0012F9;
  border: 5px solid rgba(255, 0, 18, 0.98);
  border-radius: 20px;
  height: 50px;
  font-size: 24px;
  text-overflow: ellipsis;
  width: 50%;
  z-index: 1;
  text-align: center;
  margin: 2px;
  padding: 10px 5px 5px 5px;
`;

export default class MyPromo extends React.Component {

    render() {
        return (
            <Promo>t = 41 C</Promo>
        );
    }
}