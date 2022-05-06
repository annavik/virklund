import React from "react";

export const Spacer = ({ size }: { size: number }) => {
  return <div style={{ width: `${size}px`, height: `${size}px` }}></div>;
};
