import { currencySettings } from '@constants'

const formatCurrency = ({
  number = 0,
  convertedCountry = currencySettings.convertedCountry,
  currency = currencySettings.currencyType
}) => {
  if (typeof number !== 'number') return 'Invalid Value'
  return new Intl.NumberFormat(convertedCountry, { style: 'currency', currency }).format(number)
}

export { formatCurrency }
