import * as React from "react";

const SvgDesign = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 15.5 16.9 1.9c.6-.6 1.5-.6 2.1 0l3 3c.6.6.6 1.5 0 2.1L8.5 20.5l-7 2 2-7ZM19.5 9.6l-5.1-5.1"
      stroke="#303C42"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 20.5v-2l-2-1-1-2h-2M5.5 21.4l-2.9-2.9M17 7 6.5 17.5M7 12 1.5 6.5l5-5L12 7M17 12l5.5 5.5-5 5L12 17M15.5 20.5l2-2M13.5 18.5l2-2M5.5 10.5l2-2M3.5 8.5l2-2"
      stroke="#303C42"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDesign;
