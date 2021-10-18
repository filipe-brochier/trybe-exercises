import React from 'react';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actionCreators';

class TrafficSignal extends React.Component {
  constructor() {
    super();
    this.renderSignal = this.renderSignal.bind(this);
  }

  renderSignal = () => {
    const { signalColor } = this.props;
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  render() {

    const { signalColor, changeSignal } = this.props;

    return (
      <div>
        <div className="button-container">
          <button
            type="button"
            onClick={ () => changeSignal('red') }
          >
            Red
          </button>
          <button
            type="button"
            onClick={ () => changeSignal('yellow') }
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={ () => changeSignal('green') }
          >
            Green
          </button>
        </div>
        <img className="signal" src={this.renderSignal(signalColor)} alt="signal color" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch(changeSignal(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);