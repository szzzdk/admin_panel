import AnalyticsBarChart from '../components/BarChart';
import AnalyticsLine from '../components/AnalyticsLine';
import { data } from '../data';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import { FC, PropsWithChildren } from 'react';

interface ITest {
    currWeek: number;
    current: number;
    prev: number;
    title: string;
}

const Test: FC<PropsWithChildren<ITest>> = ({
    current,
    prev,
    currWeek,
    children,
    title,
}) => {
    return (
        <div className="flex items-center justify-center border-gray-300 bg-white rounded-md h-32 w-64">
            <div>
                <h4>{title}</h4>
                <span>{data.totalPatientsTotal}</span>
                <div className="flex">
                    {current > prev ? (
                        <FaArrowAltCircleUp />
                    ) : current < prev ? (
                        <FaArrowAltCircleDown />
                    ) : null}
                    <span>
                        {((currWeek / current) * 100).toFixed(2)}% Last week
                    </span>
                </div>
            </div>
            {children}
        </div>
    );
};

type Test2<Key extends string = string> = (
    arr: { [key in Key]: number }[],
    key: Key
) => number;

const Home: React.FC = () => {
    function calculateTotal<Key>(arr: { [key in Key]: number }, key) {
        return arr.reduce((total, item) => {
            return total + item[key as keyof typeof item];
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

    return (
        <div>
            <div className="grid grid-cols-4 mx-16 mt-16">
                <span>Главная</span>
                <div className="flex items-center col-span-5 gap-7">
                    <Test
                        current={totalPatientsCurrWeek}
                        prev={totalPatientsPrevWeek}
                        currWeek={currWeek}
                        title="Total Patients"
                    >
                        <AnalyticsLine
                            data={data.totalPatientsCurrWeek}
                            dataKey="totalPatients"
                        />
                    </Test>
                    <Test
                        current={totalIncomeCurrWeek}
                        prev={totalIncomePrevWeek}
                        currWeek={currWeek}
                        title="Total Income"
                    >
                        <AnalyticsBarChart
                            data={data.totalIncomeCurrWeek}
                            dataKey="totalIncome"
                        />
                    </Test>
                    <Test
                        current={totalPatientsCurrWeek}
                        prev={totalPatientsPrevWeek}
                        currWeek={currWeek}
                        title="Total Patients"
                    >
                        <AnalyticsLine
                            data={data.totalPatientsCurrWeek}
                            dataKey="totalPatients"
                        />
                    </Test>
                    <Test
                        current={totalIncomeCurrWeek}
                        prev={totalIncomePrevWeek}
                        currWeek={currWeek}
                        title="Total Income"
                    >
                        <AnalyticsBarChart
                            data={data.totalIncomeCurrWeek}
                            dataKey="totalIncome"
                        />
                    </Test>
                </div>
            </div>
        </div>
    );
};

export default Home;
