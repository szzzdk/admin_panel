  import { BarChart, Bar } from 'recharts'

  interface AnalyticsBarChartProps {
      data: { totalIncome?: number}[] | { totalExpenses?: number}[],
      dataKey: string
  }

  
  export const AnalyticsBarChart: React.FC<AnalyticsBarChartProps> = ({ data, dataKey}) => {

    return (
      <div>
          <BarChart width={70} height={80} data={data}>
              <Bar barSize={30} dataKey={dataKey} fill="#8884d8"  />
          </BarChart> 
      </div>
    )
  }