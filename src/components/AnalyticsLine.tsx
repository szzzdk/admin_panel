import { Line, LineChart } from 'recharts';


interface AnalyticsLineProps {
    data: {totalPatients?: number }[] | {totalIncome?: number}[],
    dataKey: string
}

const AnalyticsLine: React.FC<AnalyticsLineProps> = ({ data, dataKey }) => {
    return (
        <div>
            <LineChart width={70} height={80} data={data}>
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
            </LineChart>
        </div>
    );
};
export default AnalyticsLine;
