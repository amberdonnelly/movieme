import React from "react";
import {Outlet, Link} from "react-router-dom";
import '../index.css';

function renderHeader() {
  return (
    <header>
      <div className="header">
        <h1 className="movieme"><Link to="/">movie me</Link></h1>
        <Link className="header-btn" to="/watchlist">
          watchlist
        </Link>
        <Link className="header-btn" to="/profile">
          profile
        </Link>
      </div>
    </header>
  );
}

function renderFooter() {
  return (
    <footer>
      <div className="footer">
        <h3>by Amber & Alexa</h3>
      </div>
    </footer>
  );
}

const Layout = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Movie Me</title>
        <link rel="icon" href="images/cinema.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:ital,wght@0,400;1,300&display=swap" rel="stylesheet" />
      </head>
      {renderHeader()}
      <Outlet />
      {renderFooter()}
    </>
  );
};

export default Layout;
