/* eslint-disable react/no-unused-state */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultError from '../errorPages/DefaultError';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  //   // eslint-disable-next-line no-unused-vars
  //   static getDerivedStateFromError(_) {
  //     // Update state so the next render will show the fallback UI.
  //     return { hasError: true };
  //   }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: `${error} ${errorInfo}` });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <DefaultError />;
    }
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ErrorBoundary;
