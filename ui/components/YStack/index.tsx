import React, { CSSProperties, ComponentProps } from "react";
import styles from "./ystack.module.css";
import { getAttributes } from "ui";

export type YStackProps = Omit<ComponentProps<"div">, "style"> & {
  children?: React.ReactNode;
} & CSSProperties;

type DivAttributes = JSX.IntrinsicElements["div"];

export function YStack({ children, className, ...rest }: YStackProps) {
  const attributes = getAttributes(divAttribute, rest);
  return (
    <div
      className={`${styles.yStack} ${
        typeof className === "string" ?? className
      }`}
      {...attributes}
      style={rest}
    >
      {children}
    </div>
  );
}

export const divAttribute: (keyof DivAttributes)[] = [
  "children",
  "className",
  "contentEditable",
  "contextMenu",
  "dir",
  "draggable",
  "hidden",
  "id",
  "lang",
  "slot",
  "spellCheck",
  "style",
  "tabIndex",
  "title",
  "translate",
  "role",
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onInvalid",
  "onReset",
  "onSubmit",
];
