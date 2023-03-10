import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug","Sep"];

export const data = {
  labels,
  datasets: [
    {
      label: 'Active Members',
      data: labels.map( ()=>Math.floor((Math.random() * 100) + 1)),
      backgroundColor: '#D15439',
      stack:'Stack 0'
    },
    {
      label: 'Inactive Members',
      data: labels.map(()=>Math.floor((Math.random() * 90) + 1)),
      backgroundColor: '#FFAE35',
      stack:'Stack 1'
    }
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
