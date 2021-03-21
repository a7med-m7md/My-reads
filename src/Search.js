import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from './BooksAPI'

class Search extends React.Component {
    state = {
        keyWord: '',
        books: [],
    }

    handleSearch=(e)=>{   
        this.setState({keyWord: e.target.value});
        this.state.keyWord.length !== 0? this.handleBooks() : this.setState({books:[]})
    }
    
    async componentDidMount(){
        if(this.state.keyWord.length > 0)
            this.setState({books : await BooksApi.search(this.state.keyWord)})  
        else    
            this.setState({books: []})
    }
    
    async handleBooks(){
       const books = await BooksApi.search(this.state.keyWord)
       if(!books.error)
            this.setState({books: books})
    }
    
    edit = (book)=>{
        for(var i of this.props.books)
            if(i.title === book.title)
                return i.shelf
        return 'none'
    }
    
    render(){
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/" >Close</Link>
                <div className="search-books-input-wrapper">
                    
                    <input type="text" placeholder="Search by title or author" onChange={this.handleSearch }/>
                </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
            {this.state.books.map(book=>(
                    
                    <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                       { book.imageLinks !== undefined  ?
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            :
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:   './icons/add.svg'}}></div>
                       }
                        <div className="book-shelf-changer">
                         <select defaultValue={this.edit(book)} onChange={(e)=>{this.props.handleNewState(e, book)}}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                          
                        
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    { book.hasOwnProperty('authors')?
                            book.authors.map(author=>
                              <div className="book-authors" key={author}>{author}</div>
                            )
                          :
                          <div className="book-authors"></div>
                        }
                    </div>
                </li>
            ))}
            </ol>
            </div>
        </div>
        )
    }
}
export default Search

