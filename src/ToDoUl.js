import React, { Component } from 'react';


class ToDoUl extends Component {
    constructor(props){
        super(props)
    }
    
    createItemLi = (item) => {
        return <li key={item.key}>{item.nazwa}<hr/> </li> ;
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
