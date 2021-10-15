import React from 'react';

class ClearButton extends React.Component {
  render() {
    const { clearForm } = this.props;
    return (
      <input 
        type="reset"
        value="Limpar"
        onClick={ () => clearForm() } 
      />
    )
  }
}

export default ClearButton;
