import { format } from 'date-fns';

export const cleanString = (value = '') => value.replace(/[^\d]+/g, '');

export const stringShortener = (string = '', delimitator = 10) =>
  string.length <= delimitator
    ? string
    : `${string.substring(0, delimitator)}...`;

export const stringCapitalize = (string = '') => {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
};

export const convertToCharCode = (value = '') =>
  value
    .split('')
    .map((char, i) => value.charCodeAt(i) + 10)
    .join('-');

export const randomName = (prefix = 'name') =>
  `${prefix}_${format(new Date(), 'yyyyMMdd_HHmmss')}`;

const isInvalidCpfSequence = (cpf: string) =>
  cpf.split('').every(char => char === cpf[0]);

export const validateCpf = (cpf = '') => {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || isInvalidCpfSequence(cpf)) return false;

  for (let j = 0; j < 2; j++) {
    let sum = 0;
    for (let i = 0; i < 9 + j; i++) {
      sum += parseInt(cpf[i]) * (10 + j - i);
    }
    const rest = (sum * 10) % 11;
    if (
      cpf.charAt(9 + j) !== (rest === 10 || rest === 11 ? '0' : rest.toString())
    ) {
      return false;
    }
  }
  return true;
};
