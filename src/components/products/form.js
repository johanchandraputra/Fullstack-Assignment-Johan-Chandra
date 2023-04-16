import React, { useState} from 'react'
import {
    CButton,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,

} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'

export default function form({product}) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [uom, setUom] = useState('');

    const submitProduct = async () => {
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify({
                id,
                name,
                description,
                price,
                uom,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await response.json();
        alert("Product successfully added")
        window.location.replace('/');
    }


    return (
        <>
            <div className={'flex flex-col items-center'}>
                <div className={'flex justify-center text-4xl'}>Product Form</div>
                <div className={'w-1/2 flex justify-center items-center border-2 rounded p-5 mt-2'}>
                    <CForm className="row g-3">
                        <CCol md={3}>
                            <CFormInput type="text" id="id" label="ID" value={id}
                                        onChange={e => setId(e.target.value)}/>
                        </CCol>
                        <CCol md={9}>
                            <CFormInput type="text" id="name" label="Name" value={name}
                                        onChange={e => setName(e.target.value)}/>
                        </CCol>
                        <CCol xs={12}>
                            <CFormInput type="text" id="description" label="Description" value={description}
                                        onChange={e => setDescription(e.target.value)}/>
                        </CCol>
                        <CCol xs={12}>
                            <CFormInput type="text" id="price" label="Price" placeholder="Rp." value={price}
                                        onChange={e => setPrice(e.target.value)}/>
                        </CCol>
                        <CCol md={4}>
                            <CFormSelect id="uom" label="UOM" onChange={e => setUom(e.target.value)}>
                                <option>Select...</option>
                                <option value="Sheet">Sheet</option>
                                <option value="Roll">Roll</option>
                                <option value="Pcs">Pcs</option>
                            </CFormSelect>
                        </CCol>
                        <CCol xs={12} className={'flex justify-end'}>
                            <CButton type="button" onClick={() => submitProduct(product)}>Add Product</CButton>
                        </CCol>
                    </CForm>
                </div>
            </div>
        </>
    )
}
