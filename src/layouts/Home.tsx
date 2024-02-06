import AnalyticsLine from "../components/AnalyticsLine";
import {data} from '../data';

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 h-56 items-stretch w-40">
                <div>
                    <AnalyticsLine data={data}/>
                </div>
                <div>
                    <AnalyticsLine data={data} />
                </div>
                <div>
                    <AnalyticsLine data={data} />
                </div>
                <div>
                    <AnalyticsLine  data={data}/>
                </div>
            </div>
        </div>
    )
}

export default Home;