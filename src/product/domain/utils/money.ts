/**
 * Converte um número float para formato monetário.
 * @param {number} value - O valor a ser convertido.
 * @param {string} currencySymbol - O símbolo da moeda (ex: "R$", "$").
 * @returns {string} - O valor formatado como string monetária.
 */
export const formatCurrency = (value: number, currencySymbol: string = 'R$'): string => {
  if (isNaN(value)) {
    throw new Error('O valor deve ser um número válido.');
  }

  return `${currencySymbol} ${value.toFixed(2).replace('.', ',')}`;
}