import React, { Component } from "react";
import Header from "../Header"
import SearchBar from "../SearchBar";
import ResultList from "../ResultList";
import API from "../../utils/API";

//State management
class SearchResultContainer extends Component {
  state = {
    search: "",
    employees: [],
    displayedEmployees: [],
  };

//Get random users
getEmployees = () => {
  API.search()
    .then((results) => {
      console.log(results);
      this.setState({employees: results.data.results, displayedEmployees: results.data.results})
    })
    .catch((error) => console.log(error));
};

//Get random users when component mounts
componentDidMount() {
  this.getEmployees();
}

//When user types in search bar, state changes
handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  this.filterEmployees(value.toLowerCase().trim());
  this.setState({
    [name]: value
  });
};

// When the form is submitted, search the random user API for `this.state.search`
handleFormSubmit = event => {
  event.preventDefault();
  this.getEmployees(this.state.search);
};

//Filter employees displayed on page as user types in the search bar
filterEmployees = (input) => {
  if (input) {
    this.setState({
      displayedEmployees: this.state.employees.filter((employee) => {
        return (employee.name.last.toLowerCase().includes(input));
      }),
    });
  } 
  else {
    this.setState({ displayedEmployees: this.state.employees });
  }
};

//Render all components together
render() {
    return (
      <div>
        <Header />
        <SearchBar value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        <ResultList state={this.state} filterEmployees={this.filterEmployees}/>
      </div>
    );
  }
}

export default SearchResultContainer;