import React, { Component } from 'react'
import axios from "axios"

export default class AdminDashboard extends Component {

    state = {
        messages: null,
        refresh: null
    }


    UNSAFE_componentWillMount() {
        this.getMessages()
    }

    getMessages = () => { 
        axios.get("http://localhost:20000/getMessages")
            .then(res => {
                console.log(res.data)
                this.setState({ messages: res.data })
            })
    }


    readMessage = _id => {
        axios.post("http://localhost:20000/readMessage", { _id })
            .then(res => {
                console.log(res.data)
            })
        this.setState({ refresh: null })
    }


    deleteMessage = _id => {
        axios.post("http://localhost:20000/deleteMessage", { _id })
            .then(res => {
                console.log(res.data)
            })
        this.setState({ refresh: null })
    }




    render() {
        const { messages } = this.state
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td> NO </td>
                            <td> Name </td>
                            <td> Email </td>
                            <td> Phone </td>
                            <td> Message </td>
                            <td> Actions </td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            messages !== null ?
                                messages.map((message, key) => {
                                    return (
                                        <tr key={key}>
                                            <td> {key + 1} </td>
                                            <td> {message.name} </td>
                                            <td> {message.email} </td>
                                            <td> {message.phone} </td>
                                            <td> {message.message} </td>
                                            <td>
                                                {/* <button className="btn btn-success mr-2" onClick={() => this.readMessage(message._id)} > Check as readed </button> */}
                                                <button className="btn btn-success" onClick={() => this.deleteMessage(message._id)}> Read </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                : null
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
