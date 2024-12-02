// import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./MainContent.css";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MainContent = () => {
  // Data for Blood Pressure Chart
  const chartData = {
    labels: ["Oct 2023", "Jan 2024", "Apr 2024", "Jul 2024"], // Time period for the X-axis (months/quarters)
    datasets: [
      {
        label: "Systolic",
        data: [160, 165, 170, 160], // Example systolic data points
        borderColor: "rgb(255, 99, 132)", // Color for systolic line
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Color for systolic fill
        tension: 0.1,
      },
      {
        label: "Diastolic",
        data: [78, 80, 75, 78], // Example diastolic data points
        borderColor: "rgb(53, 162, 235)", // Color for diastolic line
        backgroundColor: "rgba(53, 162, 235, 0.2)", // Color for diastolic fill
        tension: 0.1,
      },
    ],
  };

  // Options for the chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Pressure (mm Hg)",
        },
      },
    },
  };

  return (
    <main className="main-content">
      <section className="diagnosis-history">
        <h2>Diagnosis History</h2>
        <div className="chart-container">
          {/* Chart.js Integration: Line Chart */}
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="stats">
          <div>Respiratory Rate: <strong>20 bpm</strong></div>
          <div>Temperature: <strong>98.6°F</strong></div>
          <div>Heart Rate: <strong>78 bpm</strong></div>
        </div>
      </section>

      <section className="diagnostic-list">
        <h2>Diagnostic List</h2>
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>Chronic high blood pressure</td>
              <td>Under Observation</td>
            </tr>
            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance</td>
              <td>Cured</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lab-results">
        <h2>Lab Results</h2>
        <ul>
          <li>Blood Tests <button>Download</button></li>
          <li>CT Scans <button>Download</button></li>
          <li>X-Rays <button>Download</button></li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
