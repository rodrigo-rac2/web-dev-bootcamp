import React from "react";
import PropTypes from "prop-types";

function DateReact({ date }) {
  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  };
  return <p>Current date and time: {formatDate(date)}</p>;
}

DateReact.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DateReact;