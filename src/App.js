import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './Component/Main/Main';
import Axios from 'axios';
import ProductCard from './Component/ProductCard/ProductCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: null
    }
  }
  componentDidMount() {
    Axios.get('/cardInfo.json').then(response => this.setState({cardData: response.data}))
  }

  render() {
    const cards = this.state.cardData ? this.state.cardData.cardData.map(
      item => <ProductCard 
      key={item.id}
      id={item.id}
      description={this.state.cardData.description}
      isClickDescription={this.state.cardData.isClickDescription}
      linkDescription={this.state.cardData.linkDescription}
      name={this.state.cardData.name}
      isClickDecriptionLink={item.isClickDecriptionLink}
      composition={item.composition}
      serveCount={item.serveCount}
      bonus={item.bonus}
      weight={item.weight}
      measure={item.measure}
      adventure={item.adventure}
      count={item.count}
      />
    ) : ' ';
    return(
      <Main cards={cards} title={this.state.cardData ? this.state.cardData.title : ''} />
    )

  }
}

export default App;
