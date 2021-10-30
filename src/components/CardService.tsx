import React, { ReactNode } from "react";

const CardService = ({
  className,
  icon,
  serviceName,
  text,
}: {
  className?: string;
  icon: ReactNode;
  serviceName: string;
  text: string;
}) => {
  return (
    <div
      className={`flex flex-col text-center py-10 px-4 w-full shadow-2xl rounded-2xl space-y-3 ${className}`}
    >
      <div className="m-auto">{icon}</div>
      <h2 className="text-portfolio-headers font-bold text-xl">
        {serviceName}
      </h2>
      <p className="text-portfolio-headers font-medium">{text}</p>
    </div>
  );
};

export default CardService;
