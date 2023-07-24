import React from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';

const Category = ({ filterbyCategory, getCategory }) => {
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
    return (
        <Row className='my-3 mb-5'>
            <Col className='justify-content-center d-flex'>
                <Bounce>
                    {
                        getCategory.length >= 1 ? (getCategory.map((cat) => {
                            return (
                                <div>
                                    <button onClick={() => onFilter(cat)} className=' hover focus btn_style normal_state px-3 mx-2'>
                                        {cat}</button>
                                </div>
                            )
                        })) : <h2>OUT OF SERVICE</h2>
                    }
                </Bounce>
            </Col>
        </Row>
    )
}

export default Category