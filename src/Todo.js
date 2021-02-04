import { List, ListItem, ListItemText, Button, Modal, makeStyles, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import db from './firebase';
import './Todo.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    //const handleOpen = () => {
    //    setOpen(true);
    //};

    const upadteTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            task: input
        },{ merge: true })
        setOpen(false);
        setInput('');
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h4>Change your task Here.....</h4>
                <TextField id="outlined-basic" label={props.todo.todo} variant="outlined" size="small" value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} onClick={upadteTodo} variant="contained" color="primary" disableElevation>Update Task</Button>
            </div>

        </Modal>

        <List className="todo_list">
            <ListItem className="list_item">
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏲️"/>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</DeleteForeverIcon>
            </ListItem>
        </List>
        </>
    )
}

export default Todo
