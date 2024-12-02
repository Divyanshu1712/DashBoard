// import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const patients = [
    { name: "Emily Williams", gender: "Female", age: 18 },
    { name: "Ryan Johnson", gender: "Male", age: 45 },
    { name: "Brandon Mitchell", gender: "Male", age: 36 },
    { name: "Jessica Taylor", gender: "Female", age: 28 },
    // Add more patient data as required
  ];

  return (
    <aside className="sidebar">
      <h3>Patients</h3>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className={patient.name === "Jessica Taylor" ? "active" : ""}>
            {patient.name} ({patient.gender}, {patient.age})
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
