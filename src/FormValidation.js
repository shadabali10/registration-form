import React from "react";
import "./FormValidation.css";

const ValidationForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="rollNumber">Roll Number:</label>
        <input type="text" className="form-control" id="rollNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="studentNumber">Student Number:</label>
        <input type="text" className="form-control" id="studentNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="section">Section:</label>
        <input type="text" className="form-control" id="section" />
      </div>
      <div className="form-group">
        <label htmlFor="branch">Branch:</label>
        <input type="text" className="form-control" id="branch" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ValidationForm;

