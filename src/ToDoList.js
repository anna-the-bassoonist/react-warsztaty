import React, { Component } from 'react';
import ToDoUl from './ToDoUl';


class ToDoList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            zadania: []
        }
    }

    addItem = (e) => {
        e.preventDefault();
        console.log('dziala');
        
        let noweZadanie = {
//            tworzymy klucz do identyfikacji
            key: Date.now(),
            nazwa: this._inputName.value
        }
        console.log(noweZadanie);
        
        this.setState( (prevState) => {
            return {
                zadania:
                prevState.zadania.concat(noweZadanie)
            }
        });
//         czysci pole po wpisaniu imienia:
            this._inputName.value = "";
    }
    
    
    removeZadanieFromState =(key) =>{
        let filteredZadania = this.state.zadania.filter(item => item.key !==key);
        this.setState( () => {
            return{
                zadania: filteredZadania
            }
        })
    }
    render() { 
        return (
          <div className="ToDoList">
             <p>ToDoList</p>
             <form action="" onSubmit={this.addItem}>
                 <input ref={(zadanie) =>{this._inputName = zadanie}} type="text"/>
                 <input type="submit" value="Add item"/>
             </form>
             <ToDoUl listaZadan={this.state.zadania}
             removeZadanie={this.removeZadanieFromState} />
          </div>
        );
    }
}

export default ToDoList;
