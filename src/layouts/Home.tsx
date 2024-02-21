import { FC, PropsWithChildren } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';
import { StatisticLine } from '../components/StatisticLine';
import { AnalyticsBarChart } from '../components/BarChart';
import { data } from '../data';
import { ServiceStatistic } from '../components/ServiceStatistic';

interface ITest {
    currWeek: number;
    current: number;
    prev: number;
    title: string;
    overall: number;
    isSidebarOpen: boolean;
}

const Test: FC<PropsWithChildren<ITest>> = ({
    current,
    prev,
    currWeek,
    children,
    title,
    overall,
    isSidebarOpen,
}) => {
    return (
        <div className={`flex items-center justify-center border-gray-300 bg-white rounded-md ${isSidebarOpen ? 'h-32 w-96' : 'h-32 w-96'}`} >
            <div >
                <h4>{title}</h4>
                <span className='text-2xl font-bold'>{overall}</span>
                <div className="flex items-center">
                    {current > prev ? (
                        <FaArrowAltCircleUp className='text-myCustomColor text-xs'/>
                    ) : current < prev ? (
                        <FaArrowAltCircleDown className='text-myCustomColor text-xs'/>
                    ) : null}
                    
                    <span className='text-sm'>
                        {((currWeek / current) * 100).toFixed(2)}% за последнюю неделю
                    </span>
                </div>
            </div>
            {children}
        </div>
    );
};

export const Home: FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
    function calculateTotal<Key extends string = string>( // функция принимает тип Key, который должен быть строкой или подтипом строки
        arr: { [key in Key]: number }[], // каждый ключ в объекте должен быть типа Key (строка или подтип строки), а каждое значение должно быть числом.
        key: Key
    ) {
        return arr.reduce((total, item) => { // item -объекты, key -ключи
            return total + item[key];
        }, 0);
    }

    // const calculateTotalIncome = (data:{totalIncome: number}[]): number => {
    //     return data.reduce((total, item) => {
    //         return total + item.totalIncome;
    //     }, 0);
    // };

    const currWeek = data.currentWeek;

    const totalPatientsCurrWeek = calculateTotal(
        data.totalPatientsCurrWeek,
        'totalPatients'
    );
    const totalPatientsPrevWeek = calculateTotal(
        data.totalPatientsPrevWeek,
        'totalPatients'
    );
    const totalIncomeCurrWeek = calculateTotal(
        data.totalIncomeCurrWeek,
        'totalIncome'
    );
    const totalIncomePrevWeek = calculateTotal(
        data.totalIncomePrevWeek,
        'totalIncome'
    );
    const totalProceduresCurrWeek = calculateTotal(
        data.totalProceduresCurrWeek,
        'totalProcedures'
    );
    const totalProceduresPrevWeek = calculateTotal(
        data.totalProceduresPrevWeek,
        'totalProcedures'
    );
    const totalExpensesCurrWeek = calculateTotal(
        data.totalExpensesCurrWeek,
        'totalExpenses'
    );
    const totalExpensesPrevWeek = calculateTotal(
        data.totalExpensesPrevWeek,
        'totalExpenses'
    );


    return (
        <div>
            <div className='grid grid-cols-4 mx-8 mt-16'>
                <span>Главная</span>
                <div className="flex items-center col-span-5 gap-4">
                    <Test
                        current={totalPatientsCurrWeek}
                        prev={totalPatientsPrevWeek}
                        currWeek={currWeek}
                        overall={data.overallPatients}
                        title="Количество пациентов"
                        isSidebarOpen={isSidebarOpen}
                    >
                        <StatisticLine
                            data={data.totalPatientsCurrWeek}
                            dataKey="totalPatients"
                        />
                    </Test>
                    <Test
                        current={totalIncomeCurrWeek}
                        prev={totalIncomePrevWeek}
                        currWeek={currWeek}
                        overall={data.overallIncome}
                        isSidebarOpen={isSidebarOpen}
                        title="Общий доход"
                        
                    >
                        <AnalyticsBarChart
                            data={data.totalIncomeCurrWeek}
                            dataKey="totalIncome"
                        />
                    </Test>
                    <Test
                        current={totalProceduresCurrWeek}
                        prev={totalProceduresPrevWeek}
                        currWeek={currWeek}
                        overall={data.overallProcedures}
                        isSidebarOpen={isSidebarOpen}
                        title="Количество процедур"
                    >
                        <StatisticLine
                            data={data.totalProceduresCurrWeek}
                            dataKey="totalProcedures"
                        />
                    </Test>
                    <Test
                        current={totalExpensesCurrWeek}
                        prev={totalExpensesPrevWeek}
                        currWeek={currWeek}
                        overall={data.overallExpenses}
                        isSidebarOpen={isSidebarOpen    }
                        title="Количество расходов"
                    >
                        <AnalyticsBarChart
                            data={data.totalExpensesCurrWeek}
                            dataKey="totalExpenses"
                        />
                    </Test>
                </div>
            </div>
            <ServiceStatistic 
                data={data.services}
            />
        </div>
    );
};