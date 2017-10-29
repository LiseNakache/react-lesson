import React, { Component } from 'react';
import ExpenseForm from './expense-form.js'
import ExpenseDisplay from './expense-display.js'


class App extends Component {
    constructor (props) {
        super(props);
        this.state = { expenses: [] };
        this.addExpense = this.addExpense.bind(this)
      }

    addExpense() {
        alert('function connected');
        const amount = document.getElementById("amount").value
        const category = document.getElementById("category").value
        const description = document.getElementById("description").value
        let info = {
            amount : amount,
            category : category,
            description : description
        }
        this.setState({ expenses: this.state.expenses.concat(info) });
        console.log(this.state.expenses)
      }
  

    render() {
        return (
            <div className="App">
                <ExpenseForm addfunc = {this.addExpense} />
                <ExpenseDisplay   display = {this.state.expenses}  />
                
            </div>
        );
    }
}



export default App;
