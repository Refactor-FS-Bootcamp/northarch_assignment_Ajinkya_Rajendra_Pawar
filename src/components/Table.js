import React, { useState } from 'react'
import { useExcelContext } from './Context/ExcelContext'
import { Pagination } from "react-pagination-bar"
import 'react-pagination-bar/dist/index.css'
const Table = () => {
    function handleEdit(id){
            console.log(id)
    }
    let {excelFile} = useExcelContext();
    let state = excelFile[0];
    state = Object.keys(state)
    const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 8;

    return (
    
        <>
            <Pagination
        currentPage={currentPage}
        itemsPerPage={pagePostsLimit}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItems={excelFile.length}
        pageNeighbours={2}
      />
            <table className='table'>
            <thead>
                <tr>
                    {
                        state.map(item=><th key={item}>{item}</th>)
                    }
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    excelFile.slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
                    .map(item=><tr key={Object.values(item)[1]}>
                        {<>
                        {Object.values(item).map(i=> <td key={i}>{i}</td>)} 
                        <td onClick={() => handleEdit(Object.values(item)[0])} >Edit</td> 
                        </>}  
                    </tr>)
                }
            </tbody>

        
        </table>
        </>


  )
}

export default Table