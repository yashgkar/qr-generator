import { Component } from 'react';
import QRcode from 'react-qr-code';
import './App.css';

class App extends Component {
  state = {
    txt: '',
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      txt: e.target.value,
    });
    console.log(this.state.txt);
  };

  render() {
    return (
      <div className='App'>
        <h2>QR-Code Generator</h2>
        <div className='container'>
          <div className='input-box'>
            <input
              type='text'
              onChange={(e) => this.onChange(e)}
              value={this.state.txt}
              placeholder='Start typing...'
            />
          </div>
          <div className='qr'>
            <QRcode value={this.state.txt} />
          </div>
        </div>
        <footer>
          <h5>
            Made with ❤️ by:{' '}
            <a href='http://www.github.com/yashgkar' rel="noreferrer" target='_blank'>
              Yash G.
            </a>
          </h5>
        </footer>
      </div>
    );
  }
}

export default App;
