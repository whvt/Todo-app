import React from "react"
import TodoList from "./ToDo/TodoList"
import Context from './context'
import AddTodo from './ToDo/AddTodo'


function App() {

  const [todos, setTodos] = React.useState([
    {id:1, completed:false,title:'Купить хлеб'},
    {id:2, completed:false,title:'Купить сахар'},
    {id:3, completed:false,title:'Купить соль'}
  ]) 
  
  function toggleTodo (id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))    
  }

  function removeTodo (id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo (title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
      <h1>First react app</h1>      
      {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />
      ) : (
      <p>No todos!</p>
      )}
      <AddTodo onCreate={addTodo}/>     
      </div>
    </Context.Provider>    
  )  
}

export default App;
