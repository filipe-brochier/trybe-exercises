import React from 'react';

class SubmitButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return(
      <button type="button" onClick={ () => handleClick()}>
        Gerar formulário
      </button>
    );
  }
}

export default SubmitButton;
