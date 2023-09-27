import React, { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="grid grid-cols-3 gap-4">{children}</div>
    </div>
  );
};

export default Grid;
