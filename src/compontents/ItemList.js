import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ItemList = ({ itemsData }) => {
  return (
    <Row>
      {
        itemsData.length >= 1 ? (itemsData.map((item) => {
          return (

            <Col key={item.id} sm="12" className='my-3'>
              <Fade>
                <Card className='d-flex flex-row' style={{ backgroundColor: '#fff' }}>
                  <Card.Img className='card_img d-flex' variant="left" src={item.img} />
                  <Card.Body>
                    <Card.Title>
                      <div className='normal_state card_title py-3'>
                        {item.title}
                      </div>
                      </Card.Title>
                    <Card.Text>
                      <div className='card_desc'>
                        {item.description}
                      </div>
                      <div className='card_Pricing position-absolute p-3' style={{ bottom: '0', right: '0' }}> {item.price}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

          )
        })) : <h2 className="text-center"> No Items </h2>

      }

    </Row>
  )
}

export default ItemList