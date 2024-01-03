import React from "react";

const RenderIf = (props) => {
  if (props.predicate === "function" && props.predicate())
    return renderChildren(props.children);
  else if (props.predicate) return renderChildren(props.children);
  return null;
};

const renderChildren = (children) => {
  if (typeof children === "function") return <>{children()}</>;
  return <>{children}</>;
};

export default RenderIf;
