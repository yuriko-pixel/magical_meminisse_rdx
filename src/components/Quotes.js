import React from 'react'
import quill from '../img/quill.png'
import waxseal from '../img/waxseal.png'

class Quotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: ''
    }
  }
  componentDidMount() {
    let currentComponent = this;
    fetch("https://theysaidso.p.rapidapi.com/qod", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "theysaidso.p.rapidapi.com",
		"x-rapidapi-key": "5aca687f86msha1fdb7e0bd0b283p169ecajsn7e3b2e88c0f0"
	}
}).then(function(response) {
      if(response.ok) {
        response.json().then(
          function(res) {
            let newState = {quote: res.contents.quotes[0].quote, author: res.contents.quotes[0].author};
            currentComponent.setState(()=>{return newState})
          }
        );
      } else {
        console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
      }
    });

  }

  render () {
    return (
      <div className="container">
        <div className="datecontainer">
          <span>{new Date().getFullYear()} / {new Date().getMonth()+1} / {new Date().getDate()}</span>
        </div>
        <div className="quote">{this.state.quote}</div>
        <div className="author">{this.state.author}</div>
        <img src={waxseal} className="titleimage space" />
      </div>
    )
  }
}

export default Quotes;