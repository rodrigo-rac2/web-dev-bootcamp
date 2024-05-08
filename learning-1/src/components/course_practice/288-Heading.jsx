import PropTypes from "prop-types";

export default function Heading({ date }) {
  const greetingAndStyleToApply = (date) => {
    let greeting = "Good ";
    const customStyle = {
      color: "red",
    };
    if (date.getHours() < 6) {
      customStyle.color = "black";
      greeting += "Night";
    } else if (date.getHours() < 12) {
      customStyle.color = "red";
      greeting += "Morning";
    } else if (date.getHours() < 18) {
      customStyle.color = "green";
      greeting += "Afternoon";
    } else {
      customStyle.color = "blue";
      greeting += "Evening";
    }
    return {
      greeting,
      customStyle,
    };
  };

  return (
    <h1 className="heading" style={greetingAndStyleToApply(date).customStyle}>
      {greetingAndStyleToApply(date).greeting}
    </h1>
  );
}

Heading.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};
