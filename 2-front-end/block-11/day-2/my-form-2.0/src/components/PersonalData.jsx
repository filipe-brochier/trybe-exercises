import React from 'react';

class PersonalData extends React.Component {
  constructor() {
    super();
    this.generateInput = this.generateInput.bind(this);
  }
  
  generateInput(type, name, labelText, maxlength, value) {
    const { handleChange } = this.props;
    switch (type) {
      case 'text':
        return (
          <label htmlFor={ name }>
          { labelText }
          <input
            required
            type={ type }
            id={ name }
            name={ name }
            maxlength={ maxlength }
            onChange={ handleChange }
          />
          </label>
        );
      case 'radio':
        return (
          <label htmlFor={ name }>
          { labelText }
          <input
            required
            type={ type }
            id={ value }
            name={ name }
            maxlength={ maxlength }
            onChange={ handleChange }
            value={ value }
          />
          </label>
        );
      default:
        console.error("This input type doesn't exist!");
    }
  }
  render() {
    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        {this.generateInput('text', 'name', 'Nome: ', 40 )}
        {this.generateInput('text', 'email', 'Email: ', 50 )}
        {this.generateInput('text', 'cpf', 'CPF: ', 11, )}
        {this.generateInput('text', 'address', 'Endereço: ', 200 )}
        {this.generateInput('text', 'city', 'Cidade: ', 28, )}
        <div>
          {this.generateInput('radio', 'residence', 'Casa', Infinity, 'casa' )}
          {this.generateInput('radio', 'residence', 'Apartamento', Infinity, 'apartamento' )}
        </div>
      </fieldset>
    )
  }
}

export default PersonalData;
