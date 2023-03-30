import { createDate } from './createDate';
import { getNumbersOfDaysInMonth } from './getNumbersOfDaysInMonth';

interface ICreateMonthParams {
  date?: Date;
  locale?: string;
}

export const createMonth = (params?: ICreateMonthParams) => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? 'default';

  const d = createDate({ date, locale });
  const { month: monthName, year, monthNumber, monthIndex } = d;

  const getDay = (dayNumber: number) =>
    createDate({ date: new Date(year, monthIndex, dayNumber), locale });

  const createMonthDays = () => {
    const days = [];

    for (let i = 0; i <= getNumbersOfDaysInMonth(monthIndex, year) - 1; i++) {
      days[i] = getDay(i + 1);
    }

    return days;
  };

  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays
  };
};
