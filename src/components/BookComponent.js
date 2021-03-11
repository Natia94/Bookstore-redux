import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../redux/actionCreators'
import BookCard from './BookCard'
import {withRouter} from 'react-router-dom'
import '../book.css'

    // bookData.loading
    // ? 
    // (<h2>Loading...</h2>)
    // :
    // userData.error ? 
    // (<h2>{userData.error}</h2>)
    // :
    // (<div>
    //     bookData.books.map(book)
    // </div>)

const BookComponent = (props) => {
  
    const categoryiId = props.match.params.id
    
    useEffect(() => {
        props.fetchBooks(categoryiId)
    }, [])

    //console.log('props from Book Component', props )
    const displayItems = props.bookData.map(book => <BookCard  key= {book.bookId} book = {book}/>)
        
    return(
    <div style={{display: 'flex', flexDirection: 'row', padding: 30, backgroundColor:' #258ea6'}}>
        {displayItems}
    </div>
    )
}

const mapStateToProps = state => {
    return {
      bookData: state.books.categories
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      fetchBooks: (id) => dispatch(fetchBooks(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookComponent))

//export default withRouter(AdvantureComponent)