import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should setup default expenses values', () => {
    const state = expensesReducer(undefined, { type : '@@init' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '1231231'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add and expense', () => {
    const action ={
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'poulet',
            note: '123',
            amount: 2545585,
            createdAt: moment().valueOf()
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            id: expenses[1].id,
            description: 'poulet',
            note: '123',
            amount: 2545585,
            createdAt: moment().valueOf()
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], action.updates, expenses[2] ]);
});

test('should not edit and expense if id not found', () => {
    const action ={
        type: 'EDIT_EXPENSE',
        id: '546545854854848',
        updates: {
            description: 'poulet',
            note: '123',
            amount: 2545585,
            createdAt: moment().valueOf()
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});