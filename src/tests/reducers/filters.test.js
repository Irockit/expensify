import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type : '@@init' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type : 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(currentState, { type : 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type : 'SET_TEXT_FILTER', text: "poulet" });
    expect(state.text).toBe('poulet');
});

test('should set start date filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type : 'SET_START_DATE', startDate });
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type : 'SET_END_DATE', endDate });
    expect(state.endDate).toBe(endDate);
});