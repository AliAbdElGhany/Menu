import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Row>
            <Col className='justify-content-center text-center'>
                <div className='normal_state header'>MENU</div>
                <div className='justify-content-center d-flex'>
                    <p className='underline'></p>
                </div>
            </Col>
        </Row>
    )
}


export default Header