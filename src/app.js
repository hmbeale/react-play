import React from 'react';
import './index.css';

export class ArtButton extends React.Component {
  render() {
    const artConst = this.props.artElement;
    return (
        <button>{artConst.name} </button>
    );
  }
}

export class ArtButton0 extends React.Component {
  render() {
    const artConst = this.props.artElement[0];
    return (
        <button>{artConst.name} </button>
    );
  }
}

class ArtRow extends React.Component {
  render() {
    const rows = [];

    this.props.artElement.forEach((artElement) => {
      rows.push(
        <ArtButton
          artElement={artElement}
          key={artElement.name} />
      );
    });

    return (
      <div> {rows} <p> hi </p> </div>
    );
  }
}


export class BigArtTable extends React.Component {
  render() {
    return (
      <div>
      <ArtButton0 artElement={this.props.artElement} />
      <ArtRow artElement={this.props.artElement} />
      <ArtRow artElement={this.props.artElement} />
      </div>
    );
  }
}


export const ARTTHO = [
  {name: 'Three Geraniums'},
  {name: 'No More Mr. Nice Guy'},
  {name: 'A Big Hole'},
];
