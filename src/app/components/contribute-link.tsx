'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Niramit } from "next/font/google";

const niramit = Niramit({
    variable: "--font-niramit",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export default function ContributeLink() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="tertiary" onClick={handleShow}>
                Want to contribute?
            </Button>

            <Modal show={show} onHide={handleClose} className={`${niramit.className}`}>
                <Modal.Header closeButton>
                    <Modal.Title>Want to contribute?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Time Travel Television is always looking for great new videos.</p>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};