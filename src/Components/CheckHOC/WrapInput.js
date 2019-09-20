import React, { useState } from 'react';

const WrapInput = (Comp) => {
  // Function Component

  // const ErrorRender = (props) => {
  //   const [error, setError] = useState('');

  //   const handleError = (err) => {
  //     setError(err);
  //   }

  //   return <Comp handleError={handleError} error={error} {...props} />
  // }

  // Class Component

  class ErrorRender extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: '' };
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log('getDerivedStateFromError', error);
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
      console.log('componentDidCatch', error, errorInfo);
    }

    handleError = (err) => {
      this.setState({
        error: err
      });
    }

    render() {
      const { error } = this.state;
      const props = { ...this.props };
      return <Comp handleError={this.handleError} error={error} {...props} />
    }
  }



  return ErrorRender;
}

export default WrapInput;