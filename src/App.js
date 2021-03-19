import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import  Book  from "./Book"
import Search from "./Search"

class BooksApp extends React.Component {
  state = {
    books: []
  }
  async componentDidMount(){
    const val = await BooksAPI.getAll()
    this.setState(()=> ({books: val}))
  }

  newState = []
  handleChange = (e, item)=>
    this.state.books.map((currState)=>{
      if(currState.title === item){
        currState.shelf = e.target.value
        this.newState.push(currState)
      }
      else{
        this.newState.push(currState)
      }
    })
  
    handleNewState = (e,item)=>{
      this.handleChange(e, item.title)
      this.setState(this.newState)
      BooksAPI.update(item, e.target.value)
    }
  
  render() {
    return (
      <div>
      <Route exact path="/"  render={()=>(
        <Book 
          books={this.state.books}
          handleNewState={this.handleNewState}
          />
      )}/>

    <Route 
        path="/search"
        render={()=>(
          <Search 
              books={this.state.books}
              handleNewState={this.handleNewState}
          />
        )
      }
    />
    
    </div>
    )}}

export default BooksApp
