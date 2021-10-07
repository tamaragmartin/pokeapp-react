import React from "react";
import { Link } from "react-router-dom";

import error from "../../assets/snorlax404.png";

export const Error = () => {
  return (
    <section className="error">
      <img src={error} alt="snorlax sleeping" className="error--pic" />
      <h1>OOPS!</h1>
      <h3>A wild Snorlax has blocked your path!</h3>
      <Link className="error--link" to="/">
        Take me back
      </Link>
    </section>
  );
};

export default Error;
