import React from "react";
import { Link, Route } from "react-router-dom";
import SubNav from "./SubNav";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 44px;
  text-decoration: none;
  font-size: 14px;
`;
const Apple = styled.div`
  background: url(https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg);
  background-size: 16px 44px;
  background-position: center center;
  width: 16px;
  height: 44px;
  color: #f5f5f7ba;
`;
function MainNav() {
  return (
    <>
      <Section>
        <Link to="/">
          <Apple> </Apple>
        </Link>
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">Ipad</Link>
        <Link to="/iphone">Iphone</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/tv">TV</Link>
        <Link to="/music">Music</Link>
        <Link to="/support">Support</Link>
        <Link to="/">Search</Link>
        <Link to="/">Bag</Link>
      </Section>
      <Route path="/mac" component={SubNav}></Route>
    </>
  );
}

export default MainNav;
