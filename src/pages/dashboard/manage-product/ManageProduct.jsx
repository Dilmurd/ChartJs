import Back from '@/components/Back/Back'
import Today from '@/components/Today/Today'
import Linechart from "@/components/Line-chart/lineChart"
import React from 'react'
import Piechart from '@/components/Pie/Piechart'

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