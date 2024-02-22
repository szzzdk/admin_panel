    import {
        LineChart,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip,
        Legend,
        Line    ,
        Label,
        LabelList,  
    } from 'recharts';

    interface ServiceStatisticProps {
        data: { service: string; totalService: number }[];
    }

    export const ServiceStatistic: React.FC<ServiceStatisticProps> = ({ data }) => {
        return (
            <div className='ml-8 absolute'> 
                <span className='relative top-20 z-10 left-7'>Статистика услуг</span>
                <hr className='relative top-24 z-10' /> 
                <LineChart
                    width={1025}
                    height={500}
                    data={data}
                    margin={{ top: 100, right: 50, bottom: 20 }}
                    className='bg-white mt-8 mb-7 rounded-md'
                >
                    <CartesianGrid stroke="#cccccc" strokeOpacity={0.5} strokeDasharray="0" horizontal={true} vertical={false} />
                    <XAxis
                        dataKey="service"
                        interval={0}
                        tick={{ fontSize: 11 }}
                    
                    />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="totalService"
                        strokeWidth={2}
                        stroke="#8884d8"
                        dot={false}
                        //fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                    />
                    <Label value="Статистика услуг" position="top" />
                    <LabelList dataKey="service" position="top" />
                </LineChart>
            </div>
        );
    };