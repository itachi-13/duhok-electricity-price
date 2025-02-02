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

const MultiLineChart = () => {
    const { t } = useTranslation();

    const screenWidth = window.innerWidth;
    const borderWidth = screenWidth > 500 ? 2 : 1;
    const pointRadius = screenWidth > 500 ? 2 : 0.5;

    const labels = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    const datasets = [
        // {
        //     label: "2018",
        //     data: _2018.map((entry) => entry.price),
        //     borderColor: "blue",
        //     backgroundColor: "transparent",
        //     borderWidth: borderWidth,
        //     pointRadius: pointRadius,
        // },
        // {
        //     label: "2019",
        //     data: _2019.map((entry) => entry.price),
        //     borderColor: "orange",
        //     backgroundColor: "transparent",
        //     borderWidth: borderWidth,
        //     pointRadius: pointRadius,
        // },
        {
            label: "2020",
            data: _2020.map((entry) => entry.price),
            borderColor: "green",
            backgroundColor: "transparent",
            borderWidth: borderWidth,
            pointRadius: pointRadius,
        },
        {
            label: "2021",
            data: _2021.map((entry) => entry.price),
            borderColor: "cyan",
            backgroundColor: "transparent",
            borderWidth: borderWidth,
            pointRadius: pointRadius,
        },
        {
            label: "2022",
            data: _2022.map((entry) => entry.price),
            borderColor: "greenyellow",
            backgroundColor: "transparent",
            borderWidth: borderWidth,
            pointRadius: pointRadius,
        },
        {
            label: "2023",
            data: _2023.map((entry) => entry.price),
            borderColor: "purple",
            backgroundColor: "transparent",
            borderWidth: borderWidth,
            pointRadius: pointRadius,
        },
        {
            label: "2024",
            data: _2024.map((entry) => entry.price),
            borderColor: "yellow",
            backgroundColor: "transparent",
            borderWidth: borderWidth,
            pointRadius: pointRadius,
            // borderDash: [5, 5],
        },
        {
            label: "2025",
            data: _2025.map((entry) => entry.price),
            borderColor: "red",
            backgroundColor: "transparent",
            borderWidth: borderWidth,
            pointRadius: pointRadius,
            borderDash: [5, 5],
        },
    ];

    const data = {
        labels: labels,
        datasets: datasets,
    };

    const options = {
        responsive: true,
        maintainAspectRatio: screenWidth > 500, // Allow chart to resize freely
        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 20, // Adjust the box width of the legend
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
            title: {
                display: true,
                text: t("multi_line_chart_title"),
                color: "white",
                font: {
                    size: screenWidth > 500 ? 18 : 12,
                },
                padding: {
                    top: 10,
                    bottom: 20,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString();
                    },
                },
            },
            x: {
                title: {
                    display: true,
                    text: t("month"),
                },
            },
        },
    };

    return (
        <section id="multi-line-chart-section">
            <p>{t("multi_line_chart_note")}</p>
            <div className="multi-line-chart-wrapper">
                <Line data={data} options={options} />
            </div>
        </section>
    );
};

export default MultiLineChart;
