import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import BrandCaroesel from '../BrandCaroesel/BrandCaroesel';




const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <h5>Find Us on</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
                    <ListGroup.Item> <FaLinkedin /> LinkedIn </ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp /> WhatsApp </ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandCaroesel></BrandCaroesel>
            </div>
        </div >
    );
};

export default RightSideNav;