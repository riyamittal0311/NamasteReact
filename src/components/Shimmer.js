const count = 10;
const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-12">
      {Array(10)
        .fill("")
        .map((el, idx) => (
          <div key={idx} className="w-52 p-3 m-3">
            <div className="h-32  bg-slate-300 "></div>
            <h3 className="h-3 mt-2 bg-slate-300 "> </h3>
            <h4 className="h-3 mt-2  bg-slate-300 "></h4>
            <h5 className="h-3 mt-2 bg-slate-300 "></h5>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
