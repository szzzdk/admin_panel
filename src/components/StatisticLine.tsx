import { Line, LineChart } from 'recharts';


interface StatisticLineProps {
    data: {totalPatients?: number }[] | {totalProcedures?: number}[] ,
    dataKey: string
}

export const StatisticLine: React.FC<StatisticLineProps> = ({ data, dataKey }) => {
    return (
        <div>
            <LineChart width={70} height={80} data={data}>
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
            </LineChart>
        </div>
    );
};
