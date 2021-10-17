import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogImageLink: '',
      loading: true,
    }
  }

  async componentDidMount() {
    setTimeout(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(obj => obj.json())
        .then(json => this.setState({ dogImageLink: json.message, loading: false }));
    }, 1000);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if(nextState.dogImageLink.includes("terrier")) return false;
    return true;
  }

  componentDidUpdate() {
    const { dogImageLink } = this.state;
    localStorage.setItem("dogImageLink", dogImageLink );
    alert('Dog breed: ' + dogImageLink.split("/")[4])
  }

  render() {
    const { dogImageLink, loading } = this.state;
    if (loading) return <span className="flex justify-center items-center h-screen text-6xl">Loading...</span>
    return (
      <div className="App">
        <h1 className="text-center font-bold text-4xl">Random dog image generator!</h1>
        <img className="m-auto my-10" src={ dogImageLink } alt="Dog"/>
      </div>
    );
  }
}

export default App;
