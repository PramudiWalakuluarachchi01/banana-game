import React from "react";
import PropTypes from "prop-types";

export default function CountDown({ seconds }) {
  const [countdown, setCountdown] = React.useState(seconds);
  const timerID = React.useRef();

  React.useEffect(() => {
    timerID.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerID.current);
  }, []);

  React.useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerID.current);
      alert("Time is up");
    }
  }, [countdown]);

  return <div>{countdown}</div>;
}


CountDown.propTypes = {
  seconds: PropTypes.number.isRequired,
};
