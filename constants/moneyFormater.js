export const moneyFormater = (value)=>(
    Number(parseFloat(value).toFixed(2)).toLocaleString(undefined, {minimumFractionDigits: 2})
)