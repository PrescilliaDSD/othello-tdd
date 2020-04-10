import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../../utils/dnd";
import "./AsideChip.scss";

const AsideChip = ({ color }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ASIDE_CHIP },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      className={classNames(`${color}-chip chip draggable`, { isDragging })}
      data-testid="aside-chip"
      ref={drag}
    ></div>
  );
};

AsideChip.propTypes = {
  color: PropTypes.string.isRequired
};

export default AsideChip;
