import React, { createContext, useReducer } from "react";

const initialState = {
  employees: [
    { id: 1, name: "Vasu", location: "Bangalore", designation: "Sr Manager" }
  ]
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case "EDIT_EMPLOYEE":
      const updatedEmployee = action.payload;
      const employees = state.employees.map(employee => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });
      return {
        ...state,
        employees
      };
    case "DELETE_EMPLOYEE":
      console.log(state.employees)
      const emoloyees = state.employees.filter(
        employee => employee.id !== action.payload
      );

      return {
        ...state,
        employees
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
