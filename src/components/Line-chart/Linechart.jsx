import React from 'react'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const label = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const datas = {
    labels: label,
    datasets: [
      {
        label: 'Iphone',
        data: [2343223,4234344,23432,2434,24234,2342,342],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Samsung',
        data: [2342423,24342,2343],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Nokia',
        data: [2342423,243424,234234242,24342,2324342,2343],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };




  
  
  

function lineChart() {
  return (
    <div className='w-[924px] h-[445px] mt-8 '>
        <Line options={option} data={datas} />;
    </div>
  )
}

export default lineChart