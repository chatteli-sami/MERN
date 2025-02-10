import { formatDate, timeFromNow, formatAsDayDate, formatAsNumericDate } from './utils/formatDate.js';
import chalk from 'chalk';

const testDates = [
  '2023-01-01T12:34:56Z',
  '2024-05-15T08:22:33Z',
  '2021-11-20T17:45:00Z',
  '2022-07-30T06:30:15Z',
  '2025-09-10T23:59:59Z'
];

testDates.forEach(date => {
  console.log(chalk.blue(`Original ISO Date: ${date}`));
  console.log(chalk.green(`Readable Date: ${formatDate(date)}`));
  console.log(chalk.yellow(`Time from Now: ${timeFromNow(date)}`));
  console.log(chalk.magenta(`Formatted as Day Date: ${formatAsDayDate(date)}`));
  console.log(chalk.cyan(`Formatted as Numeric Date: ${formatAsNumericDate(date)}`));
  console.log(chalk.red('-------------------------------------'));
});
