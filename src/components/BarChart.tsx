import { BarChart, Bar } from 'recharts'

interface AnalyticsBarChartProps {
    data: { totalPatinets?: number}[] | { totalIncome?: number}[],
    dataKey: string
}

const AnalyticsBarCharts: React.FC<AnalyticsBarChartProps> = ({ data, dataKey}) => {
  return (
    <div>
        <BarChart width={70} height={80} data={data}>
            <Bar barSize={30} dataKey={dataKey} fill="#8884d8"/>
        </BarChart> 
    </div>
  )
}

export default AnalyticsBarCharts;