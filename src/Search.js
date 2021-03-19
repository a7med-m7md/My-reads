import React from 'react'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    state = {
        keyWord: ''
    }

    handleSearch = (e)=>{
        this.setState({keyWord: e.target.value})
    }

    
    render(){
      return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/" >Close</Link>
                <div className="search-books-input-wrapper">
                    
                    <input type="text" placeholder="Search by title or author" onChange={this.handleSearch}/>
                </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
            {this.props.books.map(book=>(
                ((book.title.toLowerCase()).includes(this.state.keyWord.toLowerCase())&&this.state.keyWord!=='')&&(
                    
                    <li key={book.title}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={(e)=>{this.props.handleNewState(e, book)}}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                    </div>
                </li>
            )))}
            </ol>
            </div>
        </div>
        )
    }
}
export default Search

