"use client"
import React, {useState} from 'react';
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

interface BarChartProps{
  dataset1Data: number[],
  dataset2Data: number[],
  dataset3Data: number[],

}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dataset1Data = [500, 700, 600, 800, 900, 750, 1000, 700, 600, 800, 900, 750,]; // Example custom data for Dataset 1
const dataset2Data = [300, 400, 450, 600, 550, 700, 800, 450, 600, 550,300, 400]; // Example custom data for Dataset 2
const profitData = dataset1Data.map((income, index) => income - dataset2Data[index]);


const BarChart: React.FC = () => {

  
  const [data, setData] = useState({
    labels: labels,
  datasets: [
    {
      label: 'Income',
      data: dataset1Data,
      backgroundColor: '#883DCF',
    },
    {
      label: 'Expense',
      data: dataset2Data,
      backgroundColor: '#F98550',
    },
    {
      label: 'Profit',
      data: profitData,
      backgroundColor: '#2BB2FE',
    }
  ]
  });
  return (
    <>
      <div className='w-full py-5'>
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
          scales: {
            x: {
              
              grid: {
                display: false, // Remove x-axis grid lines
              },
            },
            y: {
              
              grid:{
                color: 'grey',
            },
            border: {
                dash: [2,4],
            },  
            ticks: {
              callback: function(value) {
                if (typeof value === 'number') {
                  if (value >= 1000) {
                    return `$${(value / 1000)}k`; // Display 'k' for thousands
                  } else {
                    return `$${value}`; // Display regular value
                  }
                } else {
                  return value.toString();
                }
              }
          }

            },
          },
          elements: {
            bar: {
              borderRadius: 5, // Set border-radius
            },
          },
        }}
      />
    </div>
    </>
  );
}


export default BarChart;