import React,{ useEffect, useState} from 'react';
import Todo from './Todo'
import './App.css';
import { Button, FormControl, TextField } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().task})))
    })
  }, [input]);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos,input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome To TODO App</h1>
      <form>

        <FormControl>
          <TextField id="standard-basic" label="Write a Task" size="small" value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" disableElevation>
          Add Task
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          
          <Todo todo={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
