// check if object has value
export function isEmpty(object) {
  for (const property in object) {
    return false;
  }
  return true;
}
