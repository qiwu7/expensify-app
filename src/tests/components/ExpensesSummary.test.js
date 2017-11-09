import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { filters } from '../fixtures/filters';

test('should render ExpensesSummary with no expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary numExpenses={0} totalExpense={0} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary numExpenses={1} totalExpense={9522} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpensesSummary with 2 expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary numExpenses={2} totalExpense={952231324} />);
    expect(wrapper).toMatchSnapshot();
})