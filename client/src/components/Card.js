import classNames from "classnames";

import "./Card.css";

export const Card = ({ componentType = "div", children, ...restProps }) => {
  const Component = componentType;
  return (
    <Component
      {...restProps}
      className={classNames("app-card", restProps.className)}
    >
      {children}
    </Component>
  );
};
