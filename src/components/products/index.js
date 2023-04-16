import React, { useEffect, useState } from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import DeleteButton from "@/components/Buttons/DeleteButton";
import DetailButton from "@/components/Buttons/DetailButton";


export default function index({}) {
    const [data, setData] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [render]);

    return (
        <>
            <div className={'flex flex-col items-center'}>
                <div className='flex justify-center text-4xl p-3 font-bold'> Product List</div>
                <div className={'w-10/12 flex justify-center items-center'}>
                    <CTable striped>
                        <CTableHead color='dark'>
                            <CTableRow className={'text-center'}>
                                <CTableHeaderCell scope="col">Code</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                                <CTableHeaderCell scope="col">UOM</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {data && data.map((item) => {
                                return (
                                    <CTableRow className={'text-center'}key={item.id}>
                                        <CTableHeaderCell scope="row" >{item.id}</CTableHeaderCell>
                                        <CTableDataCell>{item.name}</CTableDataCell>
                                        <CTableDataCell>{item.description}</CTableDataCell>
                                        <CTableDataCell>{item.price}</CTableDataCell>
                                        <CTableDataCell>{item.uom}</CTableDataCell>
                                        <CTableDataCell>
                                            <DetailButton id={item.id} items={item} render={render} setRender={setRender}/> &nbsp;
                                            <DeleteButton id={item.id} items={item} render={render} setRender={setRender}/>
                                        </CTableDataCell>
                                    </CTableRow>
                                )
                            })
                            }
                        </CTableBody>
                    </CTable>
                </div>
            </div>
        </>
    )
}


