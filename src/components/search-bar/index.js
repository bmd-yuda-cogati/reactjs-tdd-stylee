import React from "react";

export class SearchBar extends React.Component {
    state = { keyword: "" };
    handleChangeInput = (event) => {
        const keyword = event.target.value;
        this.setState({ keyword });
    };
    render() {
        const { keyword } = this.state;
        return (
            <div className="searchbar-container">
                <input onChange={this.handleChangeInput} value={keyword} />
            </div>
        );
    }
}

export default SearchBar;
