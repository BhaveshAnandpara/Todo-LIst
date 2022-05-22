import logo from './logo.svg';
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import AddToDo from './myComponents/addToDo';
import Todos from './myComponents/todos';
import React, {useState , useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './myComponents/About'; 


function App() {

  let initTodo;
  if (localStorage.getItem("todoList") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todoList"));
  }



    function OnDelete(todoItem){
      
      
      setTodoList(todoList.filter((e)=>{ //delets Element from  Array
      return e!=todoItem
    }))

    localStorage.setItem("todoList" , JSON.stringify(todoList))
    
    
  }

  const addToDo = (title , desc )=>{

    let srn;
    if(todoList.length==0){
        srn=0;
    }
    else{
        srn = todoList[todoList.length-1].srn+ 1 
    }


    const myToDo={
        srn : srn,
        title:title,
        descrpition:desc
    }

    setTodoList([...todoList, myToDo]) 
    
  }

  const [todoList , setTodoList] = useState(initTodo) //Use This as an array (SetTodoList will Update the Array)
  
  useEffect(() => {
      localStorage.setItem("todoList" , JSON.stringify(todoList))
  }, [todoList]);

  const midPage = ()=>{
    <>







    </>
  }

  return (
    <>
    <BrowserRouter>
   <Header title={"MyToDoList"} searchBar={false}/> 
   
  <Switch>
  <Route exact path="/" render={
    ()=>{
      return(
      <div className="main-container">
        <AddToDo addToDo={addToDo} />
        <Todos todoList={todoList} onDelete={OnDelete}  /> 
      </div>
      )
    }
  } ></Route>

  <Route exact path="/about" >
    <About/>
  </Route>

  </Switch>

   <Footer/>
    </BrowserRouter>
    </>

  );
}

export default App;
