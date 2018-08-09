import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';


export class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onFocusChange = (focused) => {
        this.setState(() => ({focused}));
    };

    onSortBy = (e) => {
        if (e.target.value === 'date'){
            this.props.sortByDate();
        }else if (e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    };

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                < DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId={'start-date'}
                    endDateId={'end-date'}
                />
            </div>
        )
    };
};


const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)), 
    sortByAmount: () => dispatch(sortByAmount()), 
    sortByDate: () => dispatch(sortByDate()), 
    setStartDate: (date) => dispatch(setStartDate(date)), 
    setEndDate: (date) => dispatch(setEndDate(date)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);




