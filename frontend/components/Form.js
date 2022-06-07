import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id='todoForm' onSubmit={this.onTodoFormSubmit}>
          <input 
          value={this.state.todoNameInput} 
          onChange={this.onTodoNameInputChange} 
          type="text" 
          placeholder="type todo">
          </input>
          <input type="submit"></input>
        </form>
        <button 
        onClick={this.toggleDisplayCompleted}
        >
          {this.state.displayCompleteds ? 'Hide': 'Show'} Completed
          </button>
      </>
    )
  }
}
