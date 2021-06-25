const Layout = (props) => {
  return (
    <div style={{ height: "100vh", backgroundColor: "whitesmoke" }}>
      <div
        style={{
          height: "max-content",
          backgroundColor: "black",
          color: "white",
          padding: 10,
        }}
        className="text-center"
      >
        <h1>Frontend Developer Exams</h1>
      </div>
      <div
        style={{
          height: "max-content",
          backgroundColor: "white",
          padding: 10,
        }}
        className="text-center"
      >
        <button className="btn btn-light m-1">Forms</button>
        <button className="btn btn-light m-1">Pokemon's</button>
        <button className="btn btn-light m-1">Function</button>
      </div>
      <div style={{ height: "100%", backgroundColor: "#ebf2fe" }}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
