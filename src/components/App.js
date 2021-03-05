import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: "Goa", country: "India" },
      { name: "Amsterdam", country: "Netherlands" },
      { name: "New York", country: "USA" },
      { name: "Darjeeling", country: "India" },
      { name: "Tokyo", country: "Japan" },
      { name: "Lonavala", country: "India" },
    ];
  }

  render() {
    const arr = this.cityList.filter((item, index) => item.country === "India");
    return (
      <div id="main">
        <ol>
          {arr.map((item, index) => (
            <li key={`location${index+1}`}>
              {`${item.name}(${item.country})`}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
