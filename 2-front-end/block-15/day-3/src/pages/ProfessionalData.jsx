import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveProfessionalData } from '../actions';

class ProfessionalData extends React.Component {
  constructor() {
    super();
    this.state = {
      resume: '',
      job: '',
      jobDescription: '',
    }
    this.generateTextArea = this.generateTextArea.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value })
  }

  generateTextArea(name, labelText, maxlength){
    return (
      <label htmlFor={ name }>
        { labelText }
        <br />
        <textarea
          required
          id={ name }
          name={ name }
          maxlength={ maxlength }
          onChange={ this.handleChange }
          /><br />
      </label>
    )
  }

  render() {
    const { sendProfessionalData } = this.props;
    return (
      <>
        <fieldset>
          <legend>Último emprego</legend>
          { this.generateTextArea('resume', 'Resumo do currículo: ', 1000)}
          { this.generateTextArea('job', 'Cargo: ', 40)}
          { this.generateTextArea('jobDescription', 'Descrição do cargo: ', 500)}
        </fieldset>
        <Link to="/formDataDisplay">
          <button onClick={ () => sendProfessionalData(this.state) }>Enviar</button>
        </Link>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendProfessionalData: (payload) => {
      dispatch(saveProfessionalData(payload))
    }
  }
}
export default connect(null, mapDispatchToProps)(ProfessionalData);
