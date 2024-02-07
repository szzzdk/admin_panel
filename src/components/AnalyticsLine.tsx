
import { LineChart, Line } from 'recharts';
import {data} from '../data';

const AnalyticsLine = () => {
  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="tp" stroke="#8884d8" />
    </LineChart>
  );
};

export default AnalyticsLine;