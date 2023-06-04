import React from 'react';
import { connect } from 'react-redux';
import '../componentCSS/Todolist.css'
import { useParams } from 'react-router-dom';

function Todolist(store) {
    const params = useParams();
    const [todos, setTodos] = React.useState([store.todoState.todos])
    const [addTodoValue, setaddTodoValue] = React.useState('')

    console.log(store);
    console.log(todos);

    function getValue (e){
        setaddTodoValue(e.target.value)
    }
  return (
    <div className='todolist'>
        <div className='todo-head'>
            <h1 className='title'>{params.projectName}</h1>
            <div>
                <input className='todo-input' type="text" onChange={getValue} />
                <button onClick={()=>{store.dispatch({type:'ADDTODO', payload:addTodoValue})}} className='add-todo'>Add todo</button>
            </div>
        </div>
        <ul className='todos'>
            {store.todoState.todos.map((todo, index)=>{
                return(
                    <li className='todo'>
                        <h5>{todo}</h5>
                        <span>{index}</span>
                        <button className='delete-todo' onClick={(index)=>{store.dispatch({type:'DELTODO', payload:index})}}>delete todo</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
export default connect((store)=>{return store})(Todolist)
