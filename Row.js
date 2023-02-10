import React from 'react'
import { useExcelContext } from './Context/ExcelContext'

const Row = ({data}) => {
    console.log(data)
  let dummyData = Object.values(data)
  console.log(dummyData)
    return (
   <tr>
        {dummyData.map(item=><td key={item}>{item}</td>)}
   </tr>
  )
}

export default Row


