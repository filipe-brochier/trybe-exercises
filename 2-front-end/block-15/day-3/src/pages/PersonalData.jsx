import React from 'react';
import { Link } from 'react-router-dom';

class PersonalData extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'AC'
    }
    this.generateInput = this.generateInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value })
  }

  generateInput(type, name, labelText, maxlength) {
    switch (type) {
      case 'text':
        return (
          <label htmlFor={ name }>
            { labelText }
            <br />
            <input
              required
              type={ type }
              id={ name }
              name={ name }
              maxLength={ maxlength }
              onChange={ this.handleChange }
            /><br />
          </label>
        );
      default:
        console.error("This input type doesn't exist!");
    }
  }
  render() {
    return (
      <>
        <fieldset>
          <legend>Dados pessoais</legend>
          {this.generateInput('text', 'name', 'Nome: ', 40 )}
          {this.generateInput('text', 'email', 'Email: ', 50 )}
          {this.generateInput('text', 'cpf', 'CPF: ', 11, )}
          {this.generateInput('text', 'address', 'Endereço: ', 200 )}
          {this.generateInput('text', 'city', 'Cidade: ', 28, )}
          <div><span>Estado</span></div>
          <select required onChange={ this.handleChange } id="state" name="state">
            <optgroup label="Selecione o estado">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </optgroup>
          </select>
        </fieldset>
        <Link to="/professionalForm">
          <button>
            Próximo
          </button>
        </Link>
      </>
    )
  }
}

export default PersonalData;
