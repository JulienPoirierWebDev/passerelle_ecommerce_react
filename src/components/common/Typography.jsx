/* eslint-disable react/prop-types */

import clsx from "clsx";

const Typography = ({ children, tag, variant = "primary", customClasses}) => {
  const Component = tag || "p";

  const className = clsx({
    'text-dark-primary': variant ==="dark-primary",
    'text-primary': variant ==="primary",
    'text-light-grey': variant ==="light-grey",
    'text-white': variant ==="white",
    [customClasses]: customClasses
  });
 
  return <Component className={className}>{children}</Component>;
};

export default Typography;
