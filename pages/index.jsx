import { useState } from "react";
import Layout from "../src/components/layout";

const Index = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    gender: null,
  });

  const [submitData, setSubmitData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Hey");
    if (data.password !== data.verifyPassword || data.password === "") {
      console.log("in");
      return alert("รหัสผ่านไ่ม่ตรงกันจ้าา");
    }
    if (
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.password !== "" &&
      data.verifyPassword !== ""
    ) {
      setSubmitData(true);
    }
  };

  return (
    <Layout>
      <div className="container p-5">
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Verify Password</label>
              <input
                type="password"
                className="form-control"
                value={data.verifyPassword}
                onChange={(e) =>
                  setData({ ...data, verifyPassword: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={data.gender}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              >
                <option value={null}>Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Submit
            </button>
            {submitData && (
              <div
                className="card m-5 p-4"
                style={{ backgroundColor: "#f4f4f5" }}
              >
                <div className="text-center">
                  <h3>Result</h3>
                </div>
                <hr />
                <p>First Name : {data.firstName}</p>
                <p>Last Name : {data.lastName}</p>
                <p>E-mail : {data.email}</p>
                <p>Gender : {data.gender}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
