import React from 'react';

import {Card, CardActions, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';

function ListItem (props) {

  const toggle = function(){
    props.toggleChecked(props.id)
  }


  return (

    <div className="col-xs-12 col-lg-8 col-lg-offset-2">
      <Card>
        <CardText>
          <Checkbox onCheck={toggle} label={props.text} checked={props.checked}/>
        </CardText>
      </Card>
    </div>

  );

}

export default ListItem;
