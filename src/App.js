import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  inputElement = React.createRef()

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  deleteAll = () => {
    this.setState({
      items : []
    })
  }

  toggleCheck = (e) => {
    e.target.classList.toggle('checked')

    e.target.parentNode.classList.toggle('scribble')
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <TodoList
        addItem = {this.addItem}
        inputElement = {this.inputElement}
        handleInput = {this.handleInput}
        currentItem = {this.state.currentItem}
        deleteAll = {this.deleteAll}
        />

        <TodoItems
          entries = {this.state.items}
          deleteItem = {this.deleteItem}
          toggleCheck = {this.toggleCheck}
        />

      </div>
    );
  }
}

export default App
