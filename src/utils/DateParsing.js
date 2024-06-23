const stringToFormattedDate = (datetimeString) => {
  const _datetime = new Date(datetimeString);
  // console.log(_datetime);
  return _datetime;
};
const isExactlyLimitHoursDifference = (datetimeString, limit) => {
  const _datetime = new Date(datetimeString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = Math.abs(now - _datetime);

  // Convert the difference from milliseconds to hours
  const diffInHours = diffInMs / (1000 * 60 * 60);

  // Check if the difference is exactly 4 hours
  return diffInHours <= limit;
};
export default { stringToFormattedDate, isExactlyLimitHoursDifference };
