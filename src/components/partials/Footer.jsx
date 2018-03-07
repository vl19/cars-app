import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <FormattedMessage id="footer.copyright" />
        </div>
      </footer>
    );
  }
}

export default Footer;
