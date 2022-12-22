import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
function RevenueChart() {
    const months = Array.from({length: 12}, (e, i) => {
      return new Date(null, i + 1, null).toLocaleDateString("en", {month: "short"});
   })
    const subcriptionData = [176988, 335007, 714986, 461893, 932911, 872233, 281523, 266943, 401782, 741493, 959035, 731111]
    const data = {
        labels: months,
        datasets: [
            {
                label: "Revenue",
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
        <div className="chart relative bg-[#f6f6f6] rounded-md py-6 pr-6 pl-0 box-border h-[50vh] ">
            <h3 className="absolute top-0 left-[55px]">REVENUE ANALYSTIC</h3>
            <Bar data={data} options={data.options} />
        </div>
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export default RevenueChart
