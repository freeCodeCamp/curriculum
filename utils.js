export function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .trim()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-\.]/gi, '')
    .replace(/\./g, '-');
}
