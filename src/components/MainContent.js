import React, { Component } from 'react';
import Tick from "../asset/tick.png";

import "../components/styles.scss";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            checkboxId: []
        }
    }

    addTaskList = (e) => {
        console.log(this.state.tasks)
        let taskArr = this.state.tasks.concat(e)
        //  let tempTask  = this.state.tasks;
        this.setState({
            tasks: taskArr
        })

    }

    handleCheckbox = (index) => {
        let checkboxIdArr = []
        if (this.state.checkboxId.includes(index)) {
            this.state.checkboxId.splice(this.state.checkboxId.indexOf(index), 1)
            checkboxIdArr = this.state.checkboxId
        }
        else {
            checkboxIdArr = this.state.checkboxId.concat(index)
        }

        this.setState({
            checkboxId: checkboxIdArr
        })
        console.log(this.state.checkboxId)
    }

    render() {
        return (
            <>
                <div className="main-content">
                    <div className="main-content-container">
                        <div className="main-content-header">
                            <h1>Enter the task</h1>
                            <input type="text" name="taskName" id="taskName" /> <br/>
                            <button onClick={() => this.addTaskList(document.getElementById("taskName").value)}>Add Task</button>
                        </div>
                        <div className="main-content-body">
                            <div className="main-content-quote">
                                <div className="row">
                                    <span>Checkbox</span>
                                    <span > Task </span>
                                    <span>Status</span>
                                </div>
                                {this.state.tasks.length > 0 && this.state.tasks.map((task, index) => {
                                    return <div className="row">
                                        <span><input type="checkbox" onClick={() => this.handleCheckbox(index)} /></span>
                                        <span > {task} </span>
                                        {this.state.checkboxId.filter((id) => id === index).length > 0 ? <span id={index}><img src={Tick} alt="tick" className="select-check" /></span> : <span id={index}></span>}
                                    </div>
                                })

                                }

                            </div>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}