import React from 'react'
import { StyleSheet ,  Text, View} from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { TodoList } from '../components/TodoList'
        
const MainScreen = ({todos, handlerInputChange, inputValue, addTodo, setTodos}) => {
  return (
    <>
     
        <AddTodo
          handlerInputChange={handlerInputChange}
          inputValue={inputValue}
          addTodo={addTodo}
        />
   
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default MainScreen