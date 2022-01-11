import React from 'react'
import {Toast,ToastContainer} from "react-bootstrap"
const PosToast = ({showToaster,setShowToaster}) => {
    return(
        <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => setShowToaster({...showToaster,["show"]:false})} show={showToaster.show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{showToaster.name}</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>Added successfully</Toast.Body>
        </Toast>
      </ToastContainer>
    )
}

export default PosToast;