import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks(item) {
    return (
        <div className='element' key={item.key}
            onClick={ () => this.props.deleteItem(item.key) }>
            {item.text}
        </div>
        )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks, this)

    return <div className="theList">{listItems}</div>
  }
}

export default TodoItems