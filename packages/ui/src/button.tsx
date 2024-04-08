"use client";

import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
   
   <div className={className} onClick={()=>alert(`${appName}`)}>{children}</div>

  );
};
