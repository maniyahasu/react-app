import "./ChartBar.css";

const ChartBar = (props) => {
  const { barItem } = props;
  let barFillHeight = "0%";
  if (barItem.value > 0) {
    barFillHeight = Math.round((barItem.value / props.maxValue) * 100) + "%";
  }
  // console.log(barFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{barItem.label}</div>
    </div>
  );
};
export default ChartBar;
