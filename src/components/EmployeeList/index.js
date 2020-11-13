import React, { Component } from "react"
import EmployeeCard from "../EmployeeCard"
import API from '../API'
import Search from '../Search'



class EmployeeList extends Component {
    state = {
        result: [],
        filteredResults: [],
        query: ""
        
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

                if(item.name.first === event.target.value){

                    return true
                }
                return false


            })
                this.setState({
                    filteredResults: filtered

                })

    }




    render() {
        return (


            <div>
                    <Search handleSearchChange={this.filterResults}/>

                {this.state.filteredResults.length !== 0 ? (

                    this.state.filteredResults.map(emp => {

                        console.log(emp)
                        return <EmployeeCard
                            firstName={emp.name.first}
                            lastName={emp.name.last}
                            phone={emp.phone}
                            email={emp.email}
                            img={emp.picture.thumbnail}




                        />
                    })
                ) : (
                        <h1>No results to display</h1>
                    )
                }
            </div>


        )
    }




}


export default EmployeeList



