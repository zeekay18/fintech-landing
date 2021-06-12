import classNames from "classnames";
import React from "react";
import { Button } from "react-bootstrap";

import "./index.less";

const AppButton = ({
  label = "",
  type = "primary",
  className = "",
  size = "medium",
  onClick = (e: any) => {},
  disabled = false,
  children = null,
  ...rest
}: any) => {
  const buttonClass = classNames({
    "primary-button": type == "primary",
    "default-button": type == "default",
    "text-button": type == "text",
    "button-disabled": disabled,
  });

  return (
    <Button
      className={`app-button ${buttonClass} ${className}`}
      onClick={onClick}
      type={type}
      size={size}
      disabled={disabled}
      {...rest}
    >
      {children || label}
    </Button>
  );
};

export default AppButton;
