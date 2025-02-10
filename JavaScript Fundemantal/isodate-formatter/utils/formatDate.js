import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime.js';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export const formatDate = (isoDate) => dayjs(isoDate).format('MMMM D, YYYY, h:mm:ss A [UTC]');
export const timeFromNow = (isoDate) => dayjs(isoDate).fromNow();
export const formatAsDayDate = (isoDate) => dayjs(isoDate).format('dddd, MMMM D, YYYY');
export const formatAsNumericDate = (isoDate) => dayjs(isoDate).format('MM/DD/YYYY');
