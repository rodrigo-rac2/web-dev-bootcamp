import React from "react";
import PropTypes from "prop-types";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Entry;
