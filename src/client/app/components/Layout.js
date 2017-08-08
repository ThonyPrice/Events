import React from "react";
import BackgroundImage from "./BackgroundImage";
import Navbar from "./Navbar";
import Content from "./Content";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>

          <img src="app/img/gb-background.png" className="img-fluid overimg" alt="Responsive image" />

          <nav className="navbar navbar-fixed-top navbar-toggleable-md navbar-transparent navbar-light bg-faded" id="navbar">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">GLOBUZZER</a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link nav-text" href="#">HOME<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#">SIGN IN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-text" href="#">EVENTS</a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container text-center large-heading">
            <div className="row">
              <div className="col-12">
                <h1>Events</h1>
              </div>
            </div>
          </div>

        </div>

        <section className="first">

          <div className="container">


          </div>

        </section>

        <section id="services">

          <div className="container">

            <h1>Services here is more content</h1>

          </div>

        </section>

        <section>

          <div className="container">

            <h1>Here is even more content</h1>

          </div>

        </section>

        <section>

          <div className="container">

            <h1>Here is random more content</h1>

          </div>

        </section>
      </div>
    );
  }
}
