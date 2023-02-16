import React, { Component } from "react";
import "./Cards.css"

class Cards extends Component {
  render() {
    return (
      <article>
        <img
          className="card-img"
          src={this.props.cover}
          alt={this.props.title}
        />
        <div className="card-info">
          <h2>{this.props.title}</h2>
        </div>
      </article>
    );
  }
}

export default Cards;
