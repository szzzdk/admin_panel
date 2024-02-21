import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

interface ServiceStatisticProps {
     data: {service: string, totalService: number}[];
}


export const ServiceStatistic: React.FC<ServiceStatisticProps> = ({data}) => {
    return (
        <div>
            <BarChart width={900} height={500} data={data} margin={{ top: 40, right: 30, bottom: 90 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="service" textAnchor="end" interval={0} tick={{ fontSize: 11 }} />
                <YAxis dataKey="totalService" tick={{ fontSize: 12 }}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="totalService" fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
            </BarChart>
        </div>
    )
}