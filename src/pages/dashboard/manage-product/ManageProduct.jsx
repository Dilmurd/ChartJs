import Back from '@/components/Back/Back'
import Today from '@/components/Today/Today'
import React from 'react'
import Piechart from '@/components/Pie/Piechart'
import LineChart from '@/components/Line-chart/Linechart'

const ManageProduct = () => {
  return (
    <>
      <Today/>
      <Back/>
      <LineChart/>
      <Piechart/>
    </>
  )
}

export default ManageProduct