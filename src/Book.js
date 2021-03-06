import React from 'react'
import { Link } from 'react-router-dom'

function Book(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                      <ol className="books-grid">
                  {props.books.map(book=>(
                    (book.shelf === "currentlyReading") &&
                    <li key={book.title}>
                        <div className="book">
                          <div className="book-top">
                          {  book.hasOwnProperty('imageLinks')  ?
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            :
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:   './icons/add.svg'}}></div>
                          }     
                            <div className="book-shelf-changer">
                              <select defaultValue={'currentlyReading'} onChange={ (e)=>{props.handleNewState(e, book) }}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read" >Read</option>
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

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {props.books.map(book=>(
                        (book.shelf === "wantToRead")&&
                        <li key={book.title}>
                          <div className="book">
                            <div className="book-top">
                            {  book.hasOwnProperty('imageLinks')  ?
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            :
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:   './icons/add.svg'}}></div>
                            }  
                            <div className="book-shelf-changer">
                                <select defaultValue={'wantToRead'} onChange={(e)=>{props.handleNewState(e, book)}}>
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

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {props.books.map(book=>(
                        (book.shelf === "read")&&
                        <li key={book.title}>
                          <div className="book">
                            <div className="book-top">
                            {  book.hasOwnProperty('imageLinks')  ?
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            :
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:   './icons/add.svg'}}></div>
                          }  
                              <div className="book-shelf-changer">
                                <select defaultValue={'read'} onChange={(e)=>{props.handleNewState(e, book)}}>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read" >Read</option>
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
                      ))
                      }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
    )
}

export default Book
