const count = 10;
const Shimmer = () => {
  return (
    <div className="shim">
      {Array(10)
        .fill("")
        .map((el, idx) => (
          <div key={idx} className="shimmer">
            <div></div>
            <h3></h3>
            <h4></h4>
            <h5></h5>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
