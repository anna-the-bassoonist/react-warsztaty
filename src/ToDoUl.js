import React, { Component } from 'react';


class ToDoUl extends Component {
   
    removeZadanie = (item)=> {
//        console.log(item);
        this.props.removeZadanie(item.key);
    }
    
    createItemLi = (item) => {
        return <li onClick={()=>
this.removeZadanie(item)} key={item.key}>{item.nazwa}<hr/> </li> ;
    }
    
    render(){
        let zadania = this.props.listaZadan;
//        teraz robie mapowanie
        let listaLi = zadania.map(this.createItemLi);
        
        return(
            <ol>
                {listaLi}
            </ol>
        )
    }
}
export default ToDoUl;
