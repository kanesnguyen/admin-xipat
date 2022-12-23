import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import moment from 'moment'
function SubCriptionChart() {
    const now = new Date();
    const daysArray = Array.from({ length: 7 }, (_, days) => {
        const day = new Date(now);
        day.setDate(now.getDate() - days);
        return day;
    });
    const subcriptionData = [331, 449, 137, 763, 622, 327, 172]
    const data = {
        labels: daysArray.reverse().map((e) => moment(e).format('DD/MM')),
        datasets: [
            {
                label: "Subcriber",
                data: subcriptionData,
                backgroundColor: '#3661eb',
                borderColor: '#3661eb',
                hoverBorderWidth: 2,
                hoverBorderColor: '#3661eb',
                fill: false,
                curved: false,
                tension: 0.3
            },
        ],
        options: {
            maintainAspectRatio: false,
            bezierCurve: false,
            responsive: true,
            scales: {
                yAxes: {
                    min: 0,
                    max: Math.pow(10, (Math.max.apply(null, subcriptionData)).toString().length),
                    title: {
                        display: true,
                        fontSize: '20px',
                        fontWeight: '600'
                    },
                    labels: {
                        display: false,
                    }
                },
                xAxes: {
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 8,
                        usePointStyle: true,
                    },
                    align: 'end'
                },
            }
        },
    };
    return (
        <div className="chart relative bg-[#f6f6f6] rounded-md py-6 pb-12 md:py-6 pr-6 pl-0 box-border h-[50vh] ">
            <h3 className="md:absolute top-[13px] left-[55px] my-0 text-center ml-6 md:\ml-0">SUBCRIBERS ANALYSTIC</h3>
            <Line data={data} options={data.options} />
        </div>
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default SubCriptionChart
