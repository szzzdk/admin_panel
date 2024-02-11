import AnalyticsLine from '../components/AnalyticsLine';
import { data } from '../data';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';


const Home: React.FC = () => {
    const calculateTotal = (data: any[], key: string) => {
        return data.reduce((total, item) => {
            return total + item[key]; 
        }, 0); 
    };

    // const calculateTotalIncome = (data:{totalIncome: number}[]): number => {
    //     return data.reduce((total, item) => {
    //         return total + item.totalIncome; 
    //     }, 0); 
    // };
    
    const currWeek = data.currentWeek;
    const totalPatientsCurrWeek = calculateTotal(data.totalPatientsCurrWeek, 'totalPatients');
    const totalPatientsPrevWeek = calculateTotal(data.totalPatientsPrevWeek, 'totalPatients');
    const totalIncomeCurrWeek = calculateTotal(data.totalIncomeCurrWeek, 'totalIncome'); 
    const totalIncomePrevWeek = calculateTotal(data.totalIncomePrevWeek, 'totalIncome');

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center justify-center">
                    <div>
                        <h4>Total Patients</h4>
                        <span>{data.totalPatientsTotal}</span>
                        <div className='flex'>
                            {totalPatientsCurrWeek > totalPatientsPrevWeek ? (
                                <FaArrowAltCircleUp />
                            ) : totalPatientsCurrWeek < totalPatientsPrevWeek ? (
                                <FaArrowAltCircleDown />
                            ) : null}
                            <span>
                                {((currWeek / totalPatientsCurrWeek) * 100).toFixed(2)}% Last week
                            </span>
                        </div>   
                    </div>
                    <AnalyticsLine data={data.totalPatientsCurrWeek} dataKey="totalPatients" />
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <h4>Total Income</h4>
                        <span>{data.totalIncomeTotal}</span>
                        <div className='flex'>
                            {totalIncomeCurrWeek > totalIncomePrevWeek ? (
                                <FaArrowAltCircleUp />
                            ) : totalIncomeCurrWeek < totalIncomePrevWeek ? (
                                <FaArrowAltCircleDown />
                            ) : null}
                            <span>
                                {((currWeek / totalIncomeCurrWeek) * 100).toFixed(2)}% Last week
                            </span>
                        </div>   
                    </div>
                    <AnalyticsLine data={data.totalIncomeCurrWeek} dataKey="totalIncome"/>
                </div>
                
            </div>
        </div>
    );
};

export default Home;