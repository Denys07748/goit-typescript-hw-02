/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

const isWeekend = (day: DayOfWeek): boolean => {
  const weekendDays = [DayOfWeek.SATURDAY, DayOfWeek.SUNDAY];

  return weekendDays.includes(day);
}