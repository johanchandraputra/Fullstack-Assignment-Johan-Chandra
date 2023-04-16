import React, {useState} from "react";
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/react";

export default function DeleteButton({id, items, render, setRender}) {
    const [visible, setVisible] = useState(false);

    const deleteProduct = async (item) => {
        const response = await fetch(`/api/products/${id}`, {
            method: 'DELETE'
        })
        await response.json()
        setVisible(false);
        setRender(!render);
    }
    return (
        <>
            <CButton color="danger" onClick={() => setVisible(!visible)}>Delete</CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Are you sure want to delete ?</CModalTitle>
                </CModalHeader>
                <CModalBody className={'flex justify-center items-center'}>
                    <div className={'flex flex-col'}>
                        <h5>Please check your data</h5>
                        <span>Product Name : {items.name}</span>
                        <span>Description : {items.description}</span>
                        <span>Price : {items.price}</span>
                        <span>UOM : {items.uom}</span>
                    </div>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        No
                    </CButton>
                    <CButton color="danger" onClick={() => deleteProduct(id)}>Yes</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}
