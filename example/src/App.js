import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
	    <div className='container'>
		    <section className='violet' ref={(section) => { this.Violet = section; }}>Violet</section>
		    <section className='indigo' ref={(section) => { this.Indigo = section; }}>Indigo</section>
		    <section className='blue' ref={(section) => { this.Blue = section; }}>Blue</section>
		    <section className='green' ref={(section) => { this.Green = section; }}>Green</section>
		    <section className='yellow' ref={(section) => { this.Yellow = section; }}>Yellow</section>
		    <section className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
		    <section className='red' ref={(section) => { this.Red = section; }}>Red</section>
	    </div>
    );
  }
}

export default App;
