import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration.js';
/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */

function html(strings, ...values) {
  return strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (value === undefined) {
      return before + after;
    }

    if (Array.isArray(value)) {
      return before + value.join('') + after;
    }

    return before + value + after;
  });
}

/**
 * @param {dayjs.ConfigType} value
 * @returns {string}
 */
function formatDate(value) {
  return dayjs(value).format('MMM D');
}

// function formatDate(date) {

//   const yearDate = date.toString().split('').slice(0, 10).join('');
//   const reversedDate = yearDate.toString().split('-').reverse().join('/');
//   return reversedDate;

// }

// function formatTime(date) {
//   return date.toString().split('').slice(11, 16).join('');
// }

export {html};
