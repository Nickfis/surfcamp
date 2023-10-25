export function allDataFilledIn(formData) {
  return Object.keys(formData).every((key) => formData[key].trim().length > 0);
}
