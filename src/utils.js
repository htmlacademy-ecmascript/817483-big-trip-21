/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */

function html(strings, ...values) {
  //функция получает два массива на входе
  return strings.reduce((before, after, index) => {
    // перебираем первый массив строк, вводим три параметра
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

export {html};
