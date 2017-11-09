import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'; 
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {
    showMessage = () => {
        const numExpenses = this.props.numExpenses;
        const formatedTotalExpense = numeral(this.props.totalExpense / 100).format('$0,0.00');
        if (numExpenses === 0) {
            return 'No Expenses';
        } else {
            const expenseWord = numExpenses === 1 ? 'expense' : 'expenses';
            return `Viewing ${numExpenses} ${expenseWord} totalling ${formatedTotalExpense}`
        }
    };
    render() {
        return (
            <div>
                <p>{this.showMessage()}</p>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        numExpenses: visibleExpenses.length,
        totalExpense: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);