import { EXPIRES_MIN } from "../constants/messages";

export const currentDateISO = (addMin?: number) => {
  let currentDate = new Date();
  if (addMin) {
    currentDate.setMinutes(currentDate.getMinutes() + addMin);
  }
  return currentDate.toISOString();
}