import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from '@firebase/app';
import '@firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here... fires when the app.js loads
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>

        <Button
          disabled={!input}
          onClick={addTodo}
          variant='contained'
          color='primary'
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
