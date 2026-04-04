export const currentDateISO = (addMin?: number) => {
  const currentDate = new Date();
  if (addMin) {
    currentDate.setMinutes(currentDate.getMinutes() + addMin);
  }
  return currentDate.toISOString();
}