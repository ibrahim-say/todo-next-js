
"use client"
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AddnewTask, Updatetask } from '../apis';
import { useRouter } from 'next/navigation';
 function Edittask({id}) {
  const [show, setShow] = useState(false);
  const router=useRouter()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

async function submit(){
       const inputvalue= document.getElementsByClassName("inputValue")[0]
       await  Updatetask(inputvalue.value,id)
       router.refresh()
       handleClose()

  }
  return (
    <>
     
<FaRegEdit className='me-3 text-primary' cursor="pointer" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Edit Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="edit the task"
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

export default Edittask;