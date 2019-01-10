import React, { Component } from 'react';
import check from './img/checkmark.png';

class TodoItems extends Component {

  createTasks(item) {

    //prevent from removing item when click on checkmark
    let handleClick = e =>{
      this.props.toggleCheck(e);
      e.stopPropagation();
    }
    return (
        <div className='element' key={item.key} onClick={ () => this.props.deleteItem(item.key) }>
           {item.text}
            <img src={check} onClick={handleClick} className='check' alt="checkmark"/>
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