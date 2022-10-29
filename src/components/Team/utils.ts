export const transformName = (name: string): string =>
  name
    .toLowerCase()
    .split(' ')
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join('\n');
