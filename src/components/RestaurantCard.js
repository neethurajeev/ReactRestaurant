import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function RestaurantCard({data}) {
  return (
    <Link to ={`details/${data.id}`}>
    <Card className='my-3 p-3 rounded'>
    <Card.Img variant="top" src={data.photograph} className='p-3' />
    <Card.Body>
      <Card.Title as ="div">
          <h4>{data.name}</h4>
          </Card.Title>
      <Card.Text as ="div">
        <p>Cuisine : {data.cuisine_type}</p>
      </Card.Text>
      <Card.Text as="div">
        <p>{data.neighborhood}</p>
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default RestaurantCard
