import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      ///Notes at bottom of website
      <div className="footer">
        <p><span>:) Special thanks to Justin Chi </span></p>
        <span>Aiden Le &copy; {new Date().getFullYear()}</span>
      </div>
    );
  }
}

export default Footer;
