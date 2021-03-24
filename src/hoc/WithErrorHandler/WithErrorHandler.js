import React, { Fragment, useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    useEffect(() => {
      let reqInterceptor = axios.interceptors.request.use((req) => {
        setError(null);
        return req;
      });
      let resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => setError(error)
      );
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.request.eject(resInterceptor);
      };
    }, []);
    const errorHandlerToggle = () => {
      setError(null);
    };
    return (
      <Fragment>
        <Modal show={error} purchasingCancel={errorHandlerToggle}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default withErrorHandler;
