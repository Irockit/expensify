import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



const store = configureStore();

const expenseOne = store.dispatch(addExpense({
    description:"poulet",
    amount: 100 ,
    createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
    description:"coffee",
    amount: 300,
    createdAt: -1000
}));

store.dispatch(addExpense({
    description:"internet",
    amount: 30000,
    createdAt: 5000
}));

// store.dispatch(removeExpense({id: expenseTwo.expense.id}));

// store.dispatch(editExpense(expenseOne.expense.id, { amount: 500 }));


// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));

const state = store.getState();

console.log(state);

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));