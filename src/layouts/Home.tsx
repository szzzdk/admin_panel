import AnalyticsLine from "../components/AnalyticsLine";

const graph = [
    {
        "title": "Total Patients",
        "sum": "44000",
        "arrow": "",
        "interval": "",
        "graph": ""
    }
]

const Home = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 h-56 items-stretch w-40">
                <div>
                    <AnalyticsLine />
                </div>
            </div>
        </div>
    )
}

export default Home;