import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total'

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseStr = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00');
    return (
        <div>
                {expenseCount > 0 ? 
                    <h1>Viewing {expenseCount} {expenseStr} totaling {formatedExpensesTotal}</h1>
                    : 
                    <h1>No expenses available to display</h1>
                }
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);