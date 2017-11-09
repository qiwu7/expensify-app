const selectExpensesTotal = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + parseInt(value), 0);
};

export default selectExpensesTotal;