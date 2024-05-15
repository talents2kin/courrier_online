import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
const TotalCourriersBox = ({
 courriers=[] , totalCourriers,totalCourriersAreceptionner, totalCourriersATraiter
} : TotlCourriersBoxProps) => {
  return (
    <section className="total-balance">
     <div className="total-balance-chart">
      <DoughnutChart courriers={courriers} />
     </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Courriers :  {totalCourriers}
        </h2> 
        <div className="flex flex-col gap-2">
         <p className="total-balance-alabel">
          Total Courriers à Réceptionner 
         </p>
         <div className="total-balance-amout flex-center gap-2">
          <AnimatedCounter 
             amount =  {totalCourriersAreceptionner}
          />
         
         </div>
         
        </div>
      </div>
    </section>
  )
}

export default TotalCourriersBox
