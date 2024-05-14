import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input";

export default function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.registered && <Input type="password" placeholder="Confirm Password" />}
      <Button registered={props.registered}/>
    </form>
  );
}

Form.propTypes = {
    registered: PropTypes.bool.isRequired
}
