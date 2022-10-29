import { FC } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Props } from './';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const DoubleChart: FC<Props> = ({
  labels,
  first,
  second,
  className,
}: Props): JSX.Element => {
  const lineChartData = {
    labels,
    datasets: [first, second],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return <Line className={className} data={lineChartData} options={options} />;
};
