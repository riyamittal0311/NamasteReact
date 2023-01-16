import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h4>OOPS...!!!</h4>
      <h3>Something went wrong . Please try after some time.</h3>
      <h2>{status}</h2>
      <h2>{statusText}</h2>
    </>
  );
};

export default Error;
