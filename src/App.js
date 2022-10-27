import { useState } from 'react';
import './App.css';

function App() {
    const [ task, setTask ] = useState('')
    const [ taskList, setTaskList] = useState([])

    const addTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, task])
        setTask('')
    }

    const getTime = () => {
        const time = new Date().getHours()
        let greetings = ''

        if((time).toString() === '00' || (time).toString() <= '12') greetings = 'Good Morning 🌥'
        else if((time).toString() === '12' || (time).toString() < '18') greetings = 'Good Afternoon ☀'
        else if((time).toString() === '18' || (time).toString() <= '23') greetings = 'Good Evening 🌙'

        return greetings
    }

    return (
        <div className="App">
            <header>
                <h1>Hey, {getTime()}</h1>
                <p>What do you want to do today?</p>
                <form className="input-todo" onSubmit={addTask}>
                    <input type="text" placeholder='I Want To Do....' value={task} onChange={(e) => setTask(e.target.value)} />
                    <button>Add</button>
                </form>
            </header>
            <section className="task-list">
                <h1>Todo List</h1>
                <ul>
                    {
                        taskList.map(task => (
                            <li>{task}</li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
}

export default App;
