import { useState } from "react"
import { Button, Form, Row } from "react-bootstrap"
import styled from "styled-components";
import "./style.scss"
const List = styled.li`

  &:hover
  {
    cursor: pointer;
  }
  `


function App() {
  const [todoInput,setTodoInput] = useState("")
  const [todos,setTodos] = useState([])
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = () => {
    setTodos(oldTodos => [...oldTodos,todoInput])
    setTodoInput("")
  }
  const removeTodo = (e) => {
    e.target.remove()
  }
  
  
  return (
    <>
    <h1>React Todo App</h1>
      <Form.Group className="mb-3 form">
        <Row className="form-wrapper">
            <Form.Label>Hedef</Form.Label>
            <Form.Control onChange={handleInputChange} value={todoInput}  placeholder="input" />
            <Button onClick={addTodo}>Ekle</Button>
        </Row>
      </Form.Group>
      <div className="todos">
      <ul >
        {todos.map((item,index) => (
          <List onClick={removeTodo} key={index}>{item}</List>
        ))}
      </ul>
      </div>
    </>
  )
}
export default App
