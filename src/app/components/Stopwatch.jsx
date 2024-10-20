import ReactStopwatch from "react-stopwatch";

function Stopwatch({ limit, onCallback, onChange, className }) {
  return (
    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit={limit}
      // onChange={({ hours, minutes, seconds }) => {
      //   // do something
      // }}
      onChange={onChange}
      // onCallback={() => console.log("Finish")}
      onCallback={onCallback}
      render={({ formatted, hours, minutes, seconds }) => {
        return <div className={className}>{formatted}</div>;
      }}
    />
  );
}

export default Stopwatch;
