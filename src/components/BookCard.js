import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem  from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card'

function BookCard (props) {
    return (
        <div style={{padding: 10, margin: 10}}>
            <Card border="dark" style={{ width: '16rem', height: '38rem' }}>
            <Card.Img style = {{height: '18rem'}} variant="top" src={`http://localhost:8080/images/${props.book.image}`}/>
            <Card.Body>
                <Card.Title style = {{height: '3.5rem'}} >{props.book.title}</Card.Title>
                <Card.Subtitle style = {{height: '2rem'}} className="mb-2 text-muted">{props.book.author}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>price: ${props.book.price}</ListGroupItem>
                <ListGroupItem>quantity: {props.book.quantity}</ListGroupItem>
                <ListGroupItem>rating: {props.book.rating}</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Link href = {"/book/"+ props.book.bookId}> See Details </Card.Link>
            </Card.Body>
            </Card>
        </div>
    )
}


export default BookCard