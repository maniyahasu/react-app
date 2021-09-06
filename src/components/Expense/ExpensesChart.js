import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
    const { expensesList } = props;
    const chartBarItems = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Set', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    for (let item of expensesList) {
        const expenseMonth = item.date.getMonth();
        chartBarItems[expenseMonth].value += Math.round(item.amount);
    }
    return (
        <div>
            <Chart chartBarItems={chartBarItems} />
        </div>
    );
}
export default ExpensesChart;