import React, { Component } from 'react'

class TodoList extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
            <form onSubmit={this.props.addItem}>
                <input
                    placeholder = "Task"
                    ref = {this.props.inputElement}
                    value = {this.props.currentItem.text}
                    onChange = {this.props.handleInput}
                />
            <div>
                <button type="submit"> Add Task </button>

                <button
                    onClick={
                         () => this.props.deleteAll()
                    }> Clear All
                </button>

            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default TodoList