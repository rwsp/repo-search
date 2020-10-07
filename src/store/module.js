//this will replace any whitespace with a single '+' to facilitate URL params
export const handleSpaces = str => str.replace(/\s+/g,'+');