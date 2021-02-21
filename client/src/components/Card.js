import "./Card.css";

export const Card = ({ componentType = "div", children }) => {
  const Component = componentType;
  return <Component className="app-card">{children}</Component>;
};
