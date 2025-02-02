import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";
import {
    // _2018,
    // _2019,
    _2020,
    _2021,
    _2022,
    _2023,
    _2024,
    _2025,
} from "../data/prices";

const LineChart = () => {
    const { t } = useTranslation();

    const screenWidth = window.innerWidth;

    const allYearsData = [
        // ..._2018,
        // ..._2019,
        ..._2020,
        ..._2021,
        ..._2022,
        ..._2023,
        ..._2024,
        ..._2025,
    ];

    const labels = allYearsData.map((item) => item.month);
    const prices = allYearsData.map((item) => item.price);

    const data = {
        labels: labels,
        datasets: [
            {
                data: prices,
                borderColor: "orange",
                backgroundColor: "rgba(255, 165, 0, 0.2)",
                tension: 0.4, // for smooth curves
                borderWidth: screenWidth > 500 ? 2 : 1,
                pointRadius: screenWidth > 500 ? 2 : 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: screenWidth > 500, // Allow chart to resize freely
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: t("line_chart_title"),
                color: "white",
                font: {
                    size: screenWidth > 500 ? 18 : 12,
                },
                padding: {
                    top: 10,
                    bottom: 20,
                },
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true, // Enable zoom using pinch gestures (for touch devices)
                    },
                    mode: "x",
                },
                pan: {
                    enabled: true,
                    mode: "x",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <section id="line-chart-section">
            <div className="line-chart-wrapper">
                <Line data={data} options={options} />
            </div>
        </section>
    );
};

export default LineChart;
