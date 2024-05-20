//Sources: https://react-chartjs-2.org/examples/polar-area-chart
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import Root from './root';

ChartJS.register(
  RadialLinearScale,
  ArcElement,
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
      text: 'Official Languages per Country',
    },
  },
};

export default function Custom() {
  const [url, setURL] = useState('https://cs464p564-frontend-api.vercel.app/api/countries');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Official Languages',
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
        const lang = countries.map(country => country.official_languages.length);

        setChartData({
          labels: names,
          datasets: [
            {
              label: 'Official Languages',
              data: lang,
              backgroundColor: [
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
      <main id='custom' className='mt-20 p-4'>
        <h1>Official Languages per Country</h1>
        <p>This page displays a polar area chart showing the number of official languages per country.</p>
        <PolarArea data={chartData} options={options} />
      </main>
    </>
  );
}
