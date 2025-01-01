import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import LineChart from "./components/LineChart.jsx";
import MultiLineChart from "./components/MultiLineChart.jsx";
import Table from "./components/Table.jsx";
// import Footer from "./components/Footer.jsx";

function App() {
    useEffect(() => {
        const lng = localStorage.getItem("language");
        document.documentElement.lang = lng ?? "ku";
        document.documentElement.dir = lng === "en" ? "ltr" : "rtl";
    }, []);

    return (
        <>
            <Navbar />
            <LineChart />
            <MultiLineChart />
            <Table />
            {/* <Footer /> */}
        </>
    );
}

export default App;
