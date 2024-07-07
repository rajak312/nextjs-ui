import React, { CSSProperties, ComponentProps } from "react";
import styles from "./button.module.css";
import { getAttributes } from "ui";

export type ButtonProps = Omit<ComponentProps<"button">, "style"> & {
  children?: React.ReactNode;
} & CSSProperties;

type ButtonAttributes = JSX.IntrinsicElements["button"];

export function Button({ children, className, ...rest }: ButtonProps) {
  const attributes = getAttributes(buttonAttributes, rest);

  return (
    <button
      className={`${styles.customButton} ${
        typeof className === "string" ?? className
      }`}
      {...attributes}
      style={rest}
    >
      {children}
    </button>
  );
}

export const buttonAttributes: (keyof ButtonAttributes)[] = [
  "autoFocus",
  "disabled",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "name",
  "type",
  "value",
  "onClick",
  "onDoubleClick",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseDown",
  "onMouseUp",
  "onKeyDown",
  "onKeyUp",
  "onKeyPress",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onInvalid",
  "onReset",
  "onSubmit",
  "className",
  "id",
  "title",
  "tabIndex",
  "style",
];
