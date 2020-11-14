import React, { Component } from "react"
import EmployeeCard from "../EmployeeCard"
import API from '../API'
import Search from '../Search'
import SortButton from '../SortButton'
import Table from 'react-bootstrap/Table'
import "./style.css"




class EmployeeList extends Component {
    state = {
        result: [],
        filteredResults: [],
        
        query: "",
        sorted: false

    };

    componentDidMount() {
        API.getUsers().then(res => {
            console.log(res.data.results);
            this.setState({
                result: res.data.results,
                filteredResults: res.data.results
            });
        })

    }

    filterResults = event => {
        console.log(this);
        console.log(this.state);
        const filtered = this.state.result.filter(item => {

            if (item.name.first === event.target.value) {

                return true
            }
            return false
               
            
            

        })
        this.setState({
            filteredResults: filtered

        })

    }

    SortResults = () => {
        if (this.state.sorted === false) {
            this.setState({
                sorted: true,
                filteredResults: this.state.result.sort()
            })
           /* this.state.result.results.first.sort()*/
            


        }


    }

   




    render() {
        return (


            <div>
                <div>
                <SortButton SortResults={this.SortResults} />
                <Search handleSearchChange={this.filterResults} />
                </div>
                <div className="TableContainer">
            <Table striped bordered hover variant="dark" size="sm" responsive className="table">
                <thead>
                <tr>
                    <th>Profile Pic</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>email</th>


                </tr>

                </thead>
                <tbody>
                {this.state.filteredResults.length !== 0 ? (

                    this.state.filteredResults.map(emp => {

                        console.log(emp)
                        return (
                            
                                <tr>
                                    <td data-th="Profile-Picture">
                                        <img
                                        src ={emp.picture.thumbnail}
                                        alt ="user profile"
                                    />
                                    </td>
                                    <td data-th="Name" className="align-middle">
                                        {emp.name.first} {emp.name.last}
                                    </td>
                                    <td data-th="Phone" className="align-middle">
                                        {emp.phone}
                                    </td>
                                    <td data-th="email" className="align-middle">
                                        {emp.email}
                                    </td>
                                {/* <EmployeeCard
                                    firstName={emp.name.first}
                                    lastName={emp.name.last}
                                    phone={emp.phone}
                                    email={emp.email}
                                    image={emp.picture.thumbnail}
                                    /> */}
                                </tr>

                           
                        )
                    })
                ) : (
                        <h1>No results to display</h1>
                        
                    )
                }
                </tbody>
                </Table>
                </div>
            </div>


        )
    }




}


export default EmployeeList



