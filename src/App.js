import React from 'react';
import ImageCarousel from './Components/ImageCarousel';
import './App.css'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images:[]
    }
  }
  componentDidMount(){
    this.setState({
      images:[
        'https://api.modeland.io/image/2a8b8ad9f4e1495397cd1b0ed454542c',
        "https://api.modeland.io/image/de7d8379bad440f0989af36ae348ffe7"
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <ImageCarousel
          images={this.state.images}
        />
      </div>
  )
}
}

export default App;
