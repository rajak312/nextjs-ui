import React, { CSSProperties, ComponentProps } from "react";
import styles from "./xstack.module.css";
import { divAttribute } from "..";
import { getAttributes } from "ui";

export type XStackProps = Omit<ComponentProps<"div">, "style"> & {
  children?: React.ReactNode;
} & CSSProperties;

export function XStack({ children, className, ...rest }: XStackProps) {
  const attributes = getAttributes(divAttribute, rest);
  return (
    <div
      className={`${styles.xStack} ${
        typeof className === "string" ?? className
      }`}
      {...attributes}
      style={rest}
    >
      {children}
    </div>
  );
}
