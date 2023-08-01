import { Component } from 'react';
export class TodoList extends Component {
    state = {
        userInput: "",
        todolist: []
    }
    
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    addItem(input){
        if(input ===''){
            alert("Please enter an item!")
        }else{
            let listArray = this.state.todolist;
            listArray.push(input)
            this.setState({todolist: listArray, userInput:''})
        }
    }

        deleteList() {
            let listArray = this.state.todolist;
            listArray = [];
            this.setState({todolist: listArray})
        }

    crossedItem(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }

render(){
    return(
        <div>
            <form onSubmit={ this.onFormSubmit}>
                <div className='container'>
                    <input type="text" 
                    placeholder= "Write  down the tasks that you need to complete"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>
                <div className='container'>
                    <button className='add btn' onClick={() => this.addItem(this.state.userInput)}>ADD TASK</button>
                </div>
                <ol>
                    {this.state.todolist.map((item, index) => (
                    <li onClick={this.crossedItem} key={index}>{item}</li>
                    ))
                }
                </ol>
                <div className='container'>
                    <button className='delete btn' onClick={() => this.deleteList()}>DELETE LIST</button>
                </div>
            </form>
        </div>
        )
    }
}
