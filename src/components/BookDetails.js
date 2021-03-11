import React, {useEffect} from 'react'
import { fetchBook } from '../redux/actions/bookActionCreators'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'

  function BookDetails (props) {

    //console.log('props from BookDetails Component => > > > > ', props.book.book )
    //console.log(' props.match.params => ',props.match.params.bookId)

    const bookId = props.match.params.bookId

    const {fetchBook} = props

    useEffect(() => {
      fetchBook(bookId)
    }, [fetchBook])

    return (
      <div className="card mb-3" style={{
        // width: '800px', height:'400px',
        height: '100vh',
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: '#258ea6'
      }}>
        <div className="row no-gutters"
        style={{
          width: "800px",
          height: "440px",
          display: "flex",
          flexDirection: 'column',
          padding: "20px 40px",
          borderRadius: '10px',
          boxShadow: "0px 10px 50px #555",
          backgroundColor: '#ffffff'
        }}>
          <div className="col-md-6">
            <div
              className="bd-placeholder-img"
              width="100%"
              height="400px"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Placeholder: Image"
              preserveAspectRatio="xMidYMid slice"
              role="img"
            >
              <title>Placeholder</title>

              <rect width="100%" height="100%">
                <Image src={`http://localhost:8080/images/${props.book.book.image}`} 
                  style={{ width: '18rem', height: '25rem' }} 
                />
              </rect>
              

              {/* fillPatternImage={`http://localhost:8080/images/${props.book.book.image}`} */}
            
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{props.book.book.author}</h5>
              <h6 className="card-subtitle">{props.book.book.title}</h6>
              <p className="card-text">
                <small className="text-muted">In Stock</small>
              </p>

              <p className="card-text">
              {props.book.book.description}
              </p>
              <p className="card-text">
                <small className="text-muted">Price ${props.book.book.price}</small>
              </p>

              <p className="card-text">
                <small className="text-muted">Rating {props.book.book.rating}</small>
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    book: state.book
  }
}
  
const mapDispatchToProps = dispatch => {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookDetails))