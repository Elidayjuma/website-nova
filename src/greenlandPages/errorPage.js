import React from 'react';
import { useRouteError } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <Header/>
        <div className="container">
        <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
      
      <Footer/>
    </div>
  );
}