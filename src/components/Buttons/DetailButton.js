import {CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";
import React, { useState} from "react";

export default function DetailButton({id, items, render, setRender}) {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(items)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [uom, setUom] = useState('');


  function UpdateButton({id}) {
        const updateProduct = async (id) => {
            const response = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
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
            alert("Product successfully updated")
            window.location.replace('/');
        }
        return (
            <CButton color="primary" onClick={() => updateProduct(id)}>Update</CButton>
        )
    }


    return (
        <>
            <CButton color="primary" onClick={() => setVisible(!visible)}>Detail</CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Update your data</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <div>
                        <h5>Please check your data</h5>
                        <CFormInput type="text" id="name" label="Name" placeholder={data.name} value={name}
                                    onChange={e => setName(e.target.value)}/>
                        <CFormInput type="text" id="description" label="description" placeholder={data.description}
                                    onChange={e => setDescription(e.target.value)} value={description}/>
                        <CFormInput type="text" id="price" label="price" placeholder={data.price}
                                    onChange={e => setPrice(e.target.value)} value={price}/>
                        <CFormInput type="text" id="uom" label="uom" placeholder={data.price}
                                    onChange={e => setUom(e.target.value)} value={uom}/>
                    </div>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        No
                    </CButton>
                    <UpdateButton color="primary" id={id}>
                        Yes</UpdateButton>
                </CModalFooter>
            </CModal>
        </>


    )
}