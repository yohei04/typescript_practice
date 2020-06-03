import React from "react";

type Props = {
  message: string;
  children: React.ReactNode;
};

const Child: React.FC<Props> = ({ children, message }) => {
  return (
    <div>
    </div>
  );
};

export default Child;
