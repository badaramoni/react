import { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase'


function App() {

  const [todos, setTodos] = useState(['talk dogs to out','talk dogs to out','hello dogs to out']);
  const [input, setInput] = useState('');
 

  useEffect(() => {
    db.collection('todos').orderBy('timetamp','asc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[]);

  const addTodo = (event) =>{

    
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello world! 🚀 </h1>
    <form>
     <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)}/>

     </FormControl>


      <Button disabled = {!input} type = 'submit' onClick = {addTodo} variant="contained" color="primary">
      Add todo
    </Button>
     {/* <button type = 'submit' onClick = {addTodo}>Add todo</button> */}

       <ul>
       {todos.map(todo => (
         <Todo text = {todo} />
        //  <li>{todo}</li>
       ))}
      </ul>



</form>

      
    </div>
  );
}

export default App;
