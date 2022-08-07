import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
const reverseMonthMap = {
     0:"january",
    1:"february",
    2:"march",
    3:"april",
    4:"may",
    5:"june",
    6:"july",
    7:"august",
    8:"september",
    9:"october",
    10:"november",
    11:"december"
};
export default function Expenses({expenses}){
    const [yearSelected,setYearSelected]= useState(new Date().getFullYear().toString());
    const [filteredExpenses,setFilteredExpenses]=useState(expenses);
    const [graphState,setGraphState]= useState({});
    useEffect(()=>{
        const filteredYearExpenses= expenses.filter((expense)=>{
            return new Date(expense.date).getFullYear().toString()=== yearSelected;
        });
        const monthMap = {
            0:0,
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0,
            7:0,
            8:0,
            9:0,
            10:0,
            11:0
        };
        filteredYearExpenses.forEach(expense=>{
            monthMap[new Date(expense.date).getMonth().toString()]=monthMap[new Date(expense.date).getMonth().toString()]+1
        })
        setGraphState(monthMap);
        
        setFilteredExpenses(filteredYearExpenses);
    },[yearSelected,expenses])
    return (
        <div>
        <div className="graph-container">
            {Object.keys(graphState).map(month=>
            (
                <div>
                    <div className="graph-bar">
                        <div className="bar" style={{
                            height: (graphState[month]*200)/100
                        }}>

                        </div>
                    </div>
                    <div className="graph-label">
                        {reverseMonthMap[month]}
                    </div>
                </div>
            ))}
            
        </div>
        <ExpensesFilter selectedYear={yearSelected} setYearSelected={setYearSelected}/>
        <Card className="expenses">
            {filteredExpenses.map((dt,idx)=>{
                return (
                    <ExpenseItem key={idx} title={dt.title} amount={dt.amount} date={dt.date} />
                )
            })}
        </Card>
        </div>
    )
}