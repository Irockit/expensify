import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        This is from dashboard
        <ExpenseListFilters />
        <ExpenseList />
    </div>
    
);

export default ExpenseDashboardPage;