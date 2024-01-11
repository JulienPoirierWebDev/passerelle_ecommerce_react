/* eslint-disable react/prop-types */

import clsx from "clsx";

const Typography = ({ children, tag, variant = "primary", customClasses }) => {
  const Component = tag || "p";

  const className = clsx({
    "text-dark-primary": variant === "dark-primary",
    "text-primary": variant === "primary",
    "text-light-grey": variant === "light-grey",
    "text-white": variant === "white",
    "text-4xl font-clashRegular": tag === "h2",
    "text-2xl font-satoshi": tag === "h3",
    "text-2xl font-semibold": tag === "h1",

    [customClasses]: customClasses,
  });

  return <Component className={className}>{children}</Component>;
};

export default Typography;
