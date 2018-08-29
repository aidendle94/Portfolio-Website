import React from 'react';
import Typewriter2 from 'Typewriter2';
///This file contains the content for the name and opening paragraph.
class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="hero-container">

        <a href="resume.pdf"><Typewriter2 className="hero-title" text="Aiden Le"/></a>
        <div className="hero-description">

          <p>I'm a student at the Rawls College of Business majoring in Management of information Systems.
          To see my projects visit my <a href="https://github.com/aidendle94">github</a>. </p>
        </div>
      </div>
    );
  }
}

export default Hero;
