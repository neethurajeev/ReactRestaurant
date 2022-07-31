import React from 'react'
import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup, ListGroupItem,Card} from 'react-bootstrap'
import Rating from './Rating'

function RestaurantDetails() {

  const [restaurants,setRestaurants]=useState([])
  const {id}=useParams()
  useEffect(()=>{
    const fetchData=async()=>{
      await fetch('/restaurants.json')
      .then((res)=>res.json())
      .then((data)=>setRestaurants(data.restaurants))
    }
    fetchData(); 

  },
  [])

  const details=restaurants.find((i) =>i.id == id)
  console.log('details are',details);

  return (
   <>
      <Link className='btn-btn-danger  my-1 rounded btn-lg' to ="/" >Back</Link>
      {details ? (
        <Row className='my-3'>
          <Col md={3}>
            <Image className="img" src={details.photograph} alt={details.name} fluid/>
          </Col>
          <Col md={4}>
            <ListGroupItem>
              <h2>{details.name} </h2>
              <p>{details.neighborhood}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Address : {details.address}</p>
            </ListGroupItem>
            <ListGroupItem>
              <p>Cuisine Type : {details.cuisine_type}</p>
            </ListGroupItem>
          </Col>
          <Col  md={4}>
            <ListGroupItem>
              <h2>Operating Hours : </h2>
              <p>Monday :  {details.operating_hours.Monday}</p>
              <p>Tuesday : {details.operating_hours.Tuesday}</p>
              <p>Wednesday : {details.operating_hours.Wednesday}</p>
              <p>Thursday : {details.operating_hours.Thursday}</p>
              <p>Friday : {details.operating_hours.Friday}</p>
              <p>Saturday : {details.operating_hours.Saturday}</p>
              <p>Sunday : {details.operating_hours.Sunday}</p>
            </ListGroupItem>
          </Col>
          <Row>
            <Card className="my-3nmx-3 p-3 rounded">
              <Rating data={details.reviews} />
            </Card>
          </Row>
        </Row>
      ) : "null" }
   </>
  )
}

export default RestaurantDetails