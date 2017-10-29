import React, { Component } from 'react';
import Expense from './expense.js'



class ExpenseDisplay extends Component {

    renderExpenses() {
        return this.props.display.map((expense, index) => <Expense key={index} amt={expense.amount} cat={expense.category} descr={expense.description} />); //{...expense}
    }

            // display = [
            //     {
EXPENSES    //     amount : ,
            //     category :,
            //     description: 
            //     },
EXPENSES    //     amount : ,
            //     category :,
            //     description: 
            //     }
            // ]

    render() {
        return (
            <ul>
                {this.renderExpenses()}
            </ul>



            // <Expense   />
        );
    }
}

export default ExpenseDisplay;