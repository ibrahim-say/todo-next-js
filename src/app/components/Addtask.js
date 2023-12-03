
"use client"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AddnewTask } from '../apis';
import { useRouter } from 'next/navigation';
 function Addtask() {
  const [show, setShow] = useState(false);
  const router=useRouter()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

async function submit(){
       const inputvalue= document.getElementsByClassName("inputValue")[0]
       await  AddnewTask(inputvalue.value)
       router.refresh()
       handleClose()

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="fs-3 bg-primary rounded w-100 border-0 mb-3">
      Add New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="add new task"
                autoFocus
                className="inputValue"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ submit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addtask;