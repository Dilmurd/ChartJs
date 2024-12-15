import Back from '@/components/Back/Back'
import Today from '@/components/Today/Today'
import React from 'react'
import Piechart from '@/components/Pie/Piechart'
import lineChart from '@/components/Line-chart/Linechart'

const ManageProduct = () => {
  return (
    <>
      <Today/>
      <Back/>
      <Linechart/>
      <Piechart/>
    </>
  )
}

export default ManageProduct