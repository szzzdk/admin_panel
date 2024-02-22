import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    Label,
    LabelList,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';

interface ServiceStatisticProps {
    data: { service: string; totalService: number }[];
    isSidebarOpen: boolean;
}

export const ServiceStatistic: React.FC<ServiceStatisticProps> = ({
    data,
}) => {
    return (
        <div className="mt-8 grid grid-cols-2">
            <div className="bg-white rounded-md">
                <span className="top-20 z-10 left-7">Статистика услуг</span>
                <hr className="top-24 z-10" />
                <ResponsiveContainer width="100%" height={600}>
                    <LineChart
                        data={data}
                        margin={{ top: 50, right: 50, bottom: 20 }}
                    >
                        <CartesianGrid
                            stroke="#cccccc"
                            strokeOpacity={0.5}
                            strokeDasharray="0"
                            horizontal={true}
                            vertical={false}
                        />
                        <XAxis
                            dataKey="service"
                            interval={0}
                            tick={{ fontSize: 11 }}
                        />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="totalService"
                            strokeWidth={2}
                            stroke="#8884d8"
                            dot={false}
                            //fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <img src="" alt="" />
                <ResponsiveContainer width="100%" height={600}>
                    <BarChart
                        data={data}
                        margin={{ top: 50, right: 50, bottom: 20 }}
                    >
                        <Bar
                            type="monotone"
                            dataKey="totalService"
                            strokeWidth={2}
                            stroke="#8884d8"
                            //fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
