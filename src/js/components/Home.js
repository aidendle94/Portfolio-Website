import React from 'react';

import Navbar from 'Navbar';
import Hero from 'Hero';
import About from 'About';
import ContactLinks from 'ContactLinks';
import Footer from 'Footer';

import smoothscroll from 'smoothscroll-polyfill';

import 'index.scss';

smoothscroll.polyfill();

export default class Home extends React.Component {
  render() {
    return (
      /// This determines how the imported files will look and work.
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={this.props.statements}/>

        <div className="background"></div>
        <h2 id="contact" className="section-title">Contact me!</h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}
