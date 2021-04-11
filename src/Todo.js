import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (
        <div>
          <List>
<ListItem>
    <ListItemText primary="Todo" secondary = {props.text} />
</ListItem>

          </List>


             {/* <li>{props.text}</li> */}
        </div>
    )
}

export default Todo
