export const formatCurrency = (amount) => {
	return '$' + Number(amount.toFixed(1).toLocaleString()) + ' ';
};
