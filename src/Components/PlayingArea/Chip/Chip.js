import React from "react";
import PropTypes from "prop-types";
import "./Chip.scss";

const Chip = ({ color }) => (
  <div className={`${color}-chip chip`} data-testid="chip"></div>
);

Chip.propTypes = {
  color: PropTypes.string.isRequired
};

export default Chip;
