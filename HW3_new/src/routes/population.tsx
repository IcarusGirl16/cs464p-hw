//Sources: https://react-chartjs-2.org/examples/vertical-bar-chart
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import Root from './root';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Population',
    },
  },
};

export default function Population() {
  const [url, setURL] = useState('https://cs464p564-frontend-api.vercel.app/api/countries');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Population',
        data: [],
        backgroundColor:  [
          'rgba(0, 191, 255, 0.5)',
          'rgba(60, 179, 113, 0.5)',
          'rgba(220, 20, 60, 0.5)',
          'rgba(255, 140, 0, 0.5)',
          'rgba(65, 105, 225, 0.5)',
          'rgba(199, 21, 133, 0.5)',
          'rgba(255, 215, 0, 0.5)',
          'rgba(0, 206, 209, 0.5)',
          'rgba(178, 34, 34, 0.5)',
          'rgba(128, 0, 128, 0.5)',
          'rgba(70, 130, 180, 0.5)',
          'rgba(34, 139, 34, 0.5)',
          'rgba(30, 144, 255, 0.5)',
        ],
      },
    ],
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const countries = response.data;
        const names = countries.map(country => country.name);
        const populations = countries.map(country => country.population);

        setChartData({
          labels: names,
          datasets: [
            {
              label: 'Population',
              data: populations,
              backgroundColor:  [
                'rgba(0, 191, 255, 0.5)',
                'rgba(60, 179, 113, 0.5)',
                'rgba(220, 20, 60, 0.5)',
                'rgba(255, 140, 0, 0.5)',
                'rgba(65, 105, 225, 0.5)',
                'rgba(199, 21, 133, 0.5)',
                'rgba(255, 215, 0, 0.5)',
                'rgba(0, 206, 209, 0.5)',
                'rgba(178, 34, 34, 0.5)',
                'rgba(128, 0, 128, 0.5)',
                'rgba(70, 130, 180, 0.5)',
                'rgba(34, 139, 34, 0.5)',
                'rgba(30, 144, 255, 0.5)',
              ],
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Request Failed', error);
      });
  }, [url]);

  return (
    <>
      <Root />
      <main id='population' className='mt-20 p-4'>
        <div>
        <h1>Population</h1>
        <p>This page displays a bar chart showing population for each country.</p>
        <Bar options={options} data={chartData} className="p-4 mx-12"/>
        </div>
      </main>
    </>
  );
}
