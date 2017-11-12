import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            return <p>Viewing <span>{numExpenses}</span> {expenseWord} totalling <span>{formatedTotalExpense}</span></p>
        }
    };
    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">{this.showMessage()}</h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
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