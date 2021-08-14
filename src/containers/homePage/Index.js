import React from 'react';
import { Route } from 'react-router';
import NavBar from '../../components/navBar/Index';
import './style.css';

function Index() {
  return (
    <>
      <NavBar />
      <Route exact path="/"><h1>LOL</h1></Route>
    </>
  );
}

export default Index;