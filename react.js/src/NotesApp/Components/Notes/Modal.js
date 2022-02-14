import React, { useContext } from 'react'
import  {Modal as BtModal} from "react-bootstrap"
import  {Button} from "react-bootstrap"

import Context from '../../Context/Context'
function Modal() {
    const appData = useContext(Context)
    const [showModal,setShowModal] = appData.modal
    const [selectedNote] = appData.selectedNote;

    return (
    <BtModal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
    >
      <BtModal.Header>
        <BtModal.Title id="contained-modal-title-vcenter">
          {selectedNote.category}
        </BtModal.Title>
      </BtModal.Header>
      <BtModal.Body>
        <p>
        {selectedNote.note}
        </p>
        <small>{selectedNote.date}</small>
      </BtModal.Body>
      <BtModal.Footer>
        <Button onClick={() => setShowModal(false)}>Close</Button>
      </BtModal.Footer>
    </BtModal>  )
}

export default Modal