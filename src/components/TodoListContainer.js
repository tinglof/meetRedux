import React , {Component }from 'react';
import _ from 'lodash';
import TodoList from './TodoList';

class TodoListContainer extends Component {

  constructor(props) {
    super(props);


    this.createListItem = this.createListItem.bind(this);
    this.textUpdated = this.textUpdated.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);

    this.state = {
      items : [],
      inputFieldValue: "",
    }
  }

  toggleChecked(id) {
    let itemsArray = this.state.items.slice();

    console.log("This is firing");
    console.log(id);

    const newArray = itemsArray.map(function(item){
      if(item.id !== id){
        return item;
      }

      return {
        ...item,
        checked: !item.checked
      }
    })

    this.setState({
      items: newArray
    });
  }

  textUpdated (e) {
    const text = e.target.value;

    this.setState({
      inputFieldValue: text
    });
  }

  createListItem () {
    let itemsArray = this.state.items.slice();

    itemsArray.push({
      id: _.uniqueId('listitem-'),
      checked: false,
      text: this.state.inputFieldValue,
    });

    console.log(itemsArray);

    this.setState (
      {
        items: itemsArray,
        inputFieldValue: ""
      }
    );
  }

  render() {
    return(
      <TodoList
        listItems={this.state.items}
        inputText={this.state.inputFieldValue}
        addItemEvent={this.createListItem}
        textUpdated={this.textUpdated}
        toggleChecked={this.toggleChecked}
      />
    );
  }
}

export default TodoListContainer;
