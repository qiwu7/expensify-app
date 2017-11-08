import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 10000, createdAt: 20000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 3000, createdAt: 21000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Costco Grocery', amount: 34500, createdAt: 19000 }));
//store.dispatch(setTextFilter('water'));

const jsx = (
    <Provider store ={ store }>
        <AppRouter />
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('app'));