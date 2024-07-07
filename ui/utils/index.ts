export function getAttributes(attributeKeys: string[], props: any) {
  const attributes: Record<string, any | undefined> = {};
  attributeKeys.forEach((key) => {
    if (props[key]) {
      attributes[key as string] = props[key];
      delete props[key];
    }
  });
  return attributes;
}
