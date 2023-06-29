import React from "react";
import { Helmet } from 'react-helmet';
import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: "pink",
    };
    
  }
  handleClick() {
    this.setState({
      color: "#" + Math.floor(Math.random()*16777215).toString(16),
    });
    console.log(this.state.color);
    
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
        <style>{`body { background-color: ${this.state.color}; }`}</style>
        </Helmet>
        <div className="layout">
          <div className="background">
            <p className="main-text">
              <span className="bg_color-text">Background Color :</span>{" "}
              <span className="color-text">{this.state.color}</span>
            </p>
          </div>
          <button className="color_change-button" onClick={this.handleClick}>
            CLICK ME
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export { Body };
