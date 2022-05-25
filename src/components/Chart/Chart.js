import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { chartBarItems } = props;
  const totalMaximum = Math.max(...chartBarItems.map((el) => el.value));
  // console.log(chartBarItems);
  return (
    <div className="chart">
      {chartBarItems.map((bar) => (
        <ChartBar key={bar.label} barItem={bar} maxValue={totalMaximum} />
      ))}
    </div>
  );
};
export default Chart;
