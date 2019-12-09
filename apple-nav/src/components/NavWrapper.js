import React from "react";
import MainNav from "./MainNav";
import styled from "styled-components";
import { Route } from "react-router-dom";
const Header = styled.div`
  width: 100%;
`;
function MacBookAir() {
  return (
    <>
      <h1>This is a MacBook Air</h1>
    </>
  );
}
function Imac() {
  return (
    <>
      <h1>This is an iMac</h1>
    </>
  );
}
function MacBookPro16() {
  return (
    <>
      <h1>This is a MacBook Air</h1>
    </>
  );
}
function MacBookPro13() {
  return (
    <>
      <h1>This is a MacBook Pro 13</h1>
    </>
  );
}
function Home() {
  return (
    <>
      <h1>Welcome to our Homepage</h1>
    </>
  );
}
function NavWrapper() {
  return (
    <>
      <Header>
        <MainNav />
      </Header>
      <Route exact path="/" component={Home} />
      <Route path="/mac/macbookair" component={MacBookAir} />
      <Route path="/mac/macbookpro13" component={MacBookPro13} />
      <Route path="/mac/macbookpro16" component={MacBookPro16} />
      <Route path="/mac/imac" component={Imac} />
    </>
  );
}
export default NavWrapper;
