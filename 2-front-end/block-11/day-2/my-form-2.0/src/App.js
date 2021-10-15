import React from 'react';
import PersonalData from './components/PersonalData';
import ProfessionalData from './components/ProfessionalData';
import SubmitButton from './components/SubmitButton';
import ClearButton from './components/ClearButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      residence: '',
      resume: '',
      job: '',
      jobDescription: '',
      submitted: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  handleClick() {
    this.setState({ submitted: true })
  }

  clearForm() {
    const { submitted } = this.state;
    if (submitted === true) return this.setState({ submitted: false })
  }


  render() {
    const { name, email, cpf, address, city, state, residence, resume, job, jobDescription, submitted } = this.state;
    return (
      <div className="App">
        <form>
          <PersonalData handleChange={ this.handleChange }/>
          <ProfessionalData handleChange={ this.handleChange }/>
          <SubmitButton handleClick={ this.handleClick }/>
          <ClearButton clearForm={ this.clearForm } />
        </form>
        { submitted && 
          <div>
            <div> Nome: { name } </div>
            <div> Email: { email } </div>
            <div> CPF: { cpf } </div>
            <div> Endereço: { address } </div>
            <div> Cidade: { city } </div>
            <div> Estado: { state } </div>
            <div> Residência: { residence } </div>
            <div> Resumo do currículo: { resume } </div>
            <div> Cargo: { job } </div>
            <div> Descrição do último emprego: { jobDescription } </div>
          </div> 
        }
      </div>
    );
  }
}

export default App;
