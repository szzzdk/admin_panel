import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ResponsiveContainer,
    BarChart,
    Bar,
} from 'recharts';
import { FaCheck } from "react-icons/fa";
import { data } from '../data';

interface ServiceStatisticProps {
    data: typeof data;
    currWeek: number;
    isSidebarOpen: boolean;
}

interface RoundedTopBarProps {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
}

const RoundedTopBar: React.FC<RoundedTopBarProps> = ({
    x,
    y,
    width,
    height,
    fill,
}) => {
    // Высота скругления верхней части столбца
    const radius = 10;

    // Путь SVG для столбца с верхней частью скругленной
    const path = `M${x},${y + radius} 
                  A${radius},${radius},0,0,1,${x + width},${y + radius}
                  L${x + width},${y + height}
                  L${x},${y + height}
                  Z`;

    return <path d={path} fill={fill} />;
};

export const ServiceStatistic: React.FC<ServiceStatisticProps> = ({ data, currWeek }) => {
    function calculateTotal<Key extends string = string>(
        arr: {[key in Key]: number}[],
        key: Key
    ) {
        return arr.reduce((total, item) => {
            return total + item[key]
        }, 0);
    } 

    const totalServices = calculateTotal(
        data.services,
        'totalService'
    )

    return (
        <div className="mt-8 flex">
            <div className="bg-white rounded-md w-9/12 pt-5">
                <p className='pl-6'>Статистика услуг</p>
                <hr />
                <ResponsiveContainer height={400} >
                    <LineChart
                        data={data.services}
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
            <div className="w-3/12 bg-white rounded-md ml-9 pt-5">
                <p className='pl-7'>Статус услуг</p>
                <hr />
                <ResponsiveContainer height={300} className="pl-11">
                    <BarChart
                        data={data.services}
                        margin={{ top: 50, right: 50, bottom: 20 }}
                    >
                        <Bar
                            barSize={20}
                            dataKey="totalService"
                            strokeWidth={2}
                            fill={`#${Math.floor(
                                Math.random() * 16777215
                            ).toString(16)}`}
                            shape={(props: unknown) => (
                                <RoundedTopBar
                                    x={(props as RoundedTopBarProps).x}
                                    y={(props as RoundedTopBarProps).y}
                                    width={(props as RoundedTopBarProps).width}
                                    height={
                                        (props as RoundedTopBarProps).height
                                    }
                                    fill={(props as RoundedTopBarProps).fill}
                                />
                            )}
                        />
                    </BarChart>
                </ResponsiveContainer>
                <div className='flex'>
                    <FaCheck />
                    <div className='flex'>
                        <p>Выполненные услуги</p>
                        {((currWeek / totalServices) * 100).toFixed(2)} <span>увеличилось</span>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};
