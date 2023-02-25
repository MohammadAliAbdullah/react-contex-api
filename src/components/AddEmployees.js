import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { GlobalContext } from "../Store/Globalstate";

function AddEmployees({ socket }) {
  const [empId, setEmpId] = useState();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { state, dispatch } = useContext(GlobalContext);
  console.log(state);
  const formSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      id: !editMode ? Date.now() : empId,
      name,
      location,
      designation
    };
    if (!editMode) {
      dispatch({
        type: "ADD_EMPLOYEE",
        payload: newEmployee
      });
    } else {
      dispatch({
        type: "EDIT_EMPLOYEE",
        payload: newEmployee
      });
    }
    setName("");
    setLocation("");
    setDesignation("");
    setEditMode(false);
  };

  const cancel = () => {
    setName("");
    setLocation("");
    setDesignation("");
    setEditMode(false);
  };
  const editEmployee = employee => {
    setEmpId(employee.id);
    setName(employee.name);
    setLocation(employee.location);
    setDesignation(employee.designation);
    setEditMode(true);
  };
  const deleteEmp = id => {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: id
    })
  };
  return (
    <React.Fragment>
      {/*<Home />*/}
      <div className="login-page">
        <div className="form-div">
          <form onSubmit={formSubmit}>
            <div>
              <label htmlFor="name"
              >
                Name of the Employee
              </label>
              <input type="text"
                placeholder="Enter your name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label htmlFor="location"
              >
                Location
              </label>
              <input type="text"
                placeholder="Enter your location"
                onChange={e => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="w-full mb-5">
              <label
                htmlFor="name"
              >
                Designation
              </label>
              <input
                type="text"
                placeholder="Enter your designation"
                onChange={e => setDesignation(e.target.value)}
                value={designation}
              />
            </div>{" "}
            <div>
              <button >
                {!editMode ? "ADD EMPLOYEE" : "EDIT EMPLOYEE"}
              </button>
            </div>
            <div className="text-center mt-4 text-gray-500">
              <Link to="/" onClick={cancel}>
              </Link>
            </div>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {state.employees.map(employee => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.location}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment >
  )
}

export default AddEmployees