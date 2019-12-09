import React from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";

function SubNav() {
  const Figure = styled.figure`
    background: url("https://www.apple.com/v/mac/home/al/images/familybrowser/macbookair__ej39du0gz4uq_large.svg");
    width: 52px;
    height: 54px;
    margin: 0 auto;
    background-size: 52px 54px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Sectional = styled.div`
    display: flex;
    justify-content: space-around;
    background: rgba(245, 245, 247, 0.7);
    padding-bottom: 15px;
    padding-top: 5px;
  `;
  const Spanner = styled.span`
    color: black;
  `;
  return (
    <Sectional>
      <div>
        <Figure />
        <Link to="/mac/macbookair">
          <Spanner>Macbook Air</Spanner>
        </Link>
      </div>
      <div>
        <Figure />
        <Link to="/mac/macbookpro13">
          <Spanner>Macbook Pro 13'</Spanner>
        </Link>
      </div>
      <div>
        <Figure />
        <Link to="/mac/macbookpro16">
          <Spanner>Macbook Pro 16</Spanner>
        </Link>
      </div>
      <div>
        <Figure />
        <Link to="/mac/imac">
          <Spanner>iMac</Spanner>
        </Link>
      </div>
      <div>
        <Figure />
        <Link to="/mac/macbookair">
          <Spanner>Macbook Air</Spanner>
        </Link>
      </div>
      <div>
        <Figure />
        <Link to="/mac/macbookair">
          <Spanner>Macbook Air</Spanner>
        </Link>
      </div>
      <div>
        <Figure />
        <Link to="/mac/macbookair">
          <Spanner>Macbook Air</Spanner>
        </Link>
      </div>
    </Sectional>
  );
}

export default SubNav;
