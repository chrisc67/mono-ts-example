import type { SVGProps } from "react";
import type { JSX } from "react/jsx-runtime";

export const DownArrow = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      version="1.1"
      transform="matrix(6.123233995736766e-17,1,1,-6.123233995736766e-17,0,0)"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
