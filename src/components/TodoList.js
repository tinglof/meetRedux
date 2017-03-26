import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ListItem from './ListItem';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

function TodoList (props) {

  function renderListitems() {
    return props.listItems.map( (listItem) => <ListItem key={listItem.id} text={listItem.text} toggleChecked={props.toggleChecked} id={listItem.id} checked={listItem.checked} />);
  }

  return(
    <MuiThemeProvider>
      <div className="col-xs-12 col-lg-8 col-lg-offset-2 text-center">
        <h1>Todo List</h1>
        <div className="row">
          <TextField value={props.inputText} onChange={props.textUpdated} hintText="What needs to be done?"/>
          <FloatingActionButton onClick={props.addItemEvent} mini={true}><ContentAdd /></FloatingActionButton>
        </div>
        {renderListitems()}
      </div>
    </MuiThemeProvider>
  );
}

export default TodoList;
