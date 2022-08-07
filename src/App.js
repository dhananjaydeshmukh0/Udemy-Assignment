import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css"
import { useState } from "react";
const expense = [
  {
    id: "1",
    title: "Toilet Paper",
    date: new Date(2021, 5, 7),
    amount: "150rs"
  },
  {
    id: "2",
    title: "Rent",
    date: new Date(2021, 3, 7),
    amount: "15000rs"
  },
  {
    id: "3",
    title: "Food",
    date: new Date(2022, 2, 7),
    amount: "1500rs"
  },
  {
    id: "4",
    title: "Water",
    date: new Date(2022, 1, 7),
    amount: "150rs"
  },
  {
    id: "5",
    title: "Water",
    date: new Date(2022, 1, 7),
    amount: "150rs"
  },{
    id: "6",
    title: "Water",
    date: new Date(2022, 1, 7),
    amount: "150rs"
  },
  {
    id: "7",
    title: "Water",
    date: new Date(2022, 1, 7),
    amount: "150rs"
  },
];
function App() {
  const [expenses,setExpenses]= useState(expense);
  const onAddExpenseHandler=(addedData)=>{
    console.log(addedData);
    setExpenses([...expenses,addedData]); 

  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
