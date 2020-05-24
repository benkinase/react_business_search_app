import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };

    //Create an Options Object (member variable)
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };
  handleSortByChange = (sortByOption) => {
    this.setState({ sortBy: sortByOption }, () => {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
    });
  };

  handleTermChange = (e) => {
    this.setState({ term: e.target.value });
  };

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  handleSearch = (e) => {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    e.preventDefault();
  };

  renderSortByOptions = () => {
    // iterate through the object with map()
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );

      e.preventDefault();
    }
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
            onKeyPress={this.handleKeyPress}
          />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} href="www.#.de">
            Let's Go
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
