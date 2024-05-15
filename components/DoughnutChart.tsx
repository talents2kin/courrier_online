"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ courriers} : DoughnutChartProps) => {
 const data = { 
  datasets: [
   {
    label : "Courriers",
    data: [10,5,5],
    backgroundColor: ['#0747b6' , '#2265d8' , '#2f91fa']
   }
  ] ,
  labels: ['Courriers a réceptionné', 'Courriers à traité', 'Courriers traité' ]
 }
  return <Doughnut data={data}
  options={{
    cutout:'60%',
    plugins:{
     legend:{
      display:false
     }
    }
  }} />
}

export default DoughnutChart
