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
            <Button variant="tertiary" className="btn btn-link text-decoration-none" onClick={handleShow}>
                Want to contribute?
            </Button>

            <Modal show={show} onHide={handleClose} className={`${niramit.className}`}>
                <Modal.Header closeButton>
                    <Modal.Title>Want to contribute?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Time Travel Television is always looking for great new videos!</p>
                    <p>Send us a YouTube link to a video you'd like to see added. We'll review and consider adding it! <a href="mailto:suggestions@timetraveltelevision.com">suggestions@timetraveltelevision.com</a></p>
                    <hr/>
                    <h4>Just want to say thanks?</h4>
                    <p>Help us keep the lights on by clicking the button below to send us a couple bucks.</p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"/><input type="hidden" name="hosted_button_id" value="W4W36HRRTZFMG"/><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" style={{ border: 'none' }} name="submit" alt="PayPal - The safer, easier way to pay online!"/><img alt="" style={{ border: 'none' }} src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/></form>
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