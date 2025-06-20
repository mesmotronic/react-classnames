export function classNames(...classNames: (string | null | undefined | false)[]): string {
  return classNames
    .map(className => typeof className === "string" ? className.trim() : className)
    .filter(Boolean)
    .join(' ')
    ;
}