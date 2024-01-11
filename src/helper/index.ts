export const truncate = (text: string, n: number) =>
  text?.length > n ? text.substr(0, n - 1) + "..." : text;
