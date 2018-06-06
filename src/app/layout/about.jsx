import React, {Component} from 'react';

export class AboutCmp extends Component {
  render() {
    return (
      <section id="about" className="about site-wrap">
        <div className="menu-background dark"><h1>Informatie</h1></div>
        <div className="container description">
          <div><h2>Amsterdam neerslag</h2></div>
          <img src="static/favicon-96x96.png"/>
          <div className=""><a href="https://icons8.com">Icon pack by Icons8</a></div>
          <div className="">Icons was processed at <a href="http://www.favicomatic.com/">favicomatic</a></div>
          <div className="">Weather data from <a href="https://www.buienradar.nl/overbuienradar/gratis-weerdata">buineradar</a></div>
          <div className="">Crafted with <span className="heart">❤︎</span> in ✖✖✖</div>
        </div>
      </section>
    );
  }
}
