import React from 'react';

class ProfessionalData extends React.Component {
  constructor() {
    super();
    this.generateTextArea = this.generateTextArea.bind(this);
  }
  
  generateTextArea(name, labelText, maxlength){
    const { handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <textarea
          required
          id={ name }
          name={ name }
          maxlength={ maxlength }
          onChange={ handleChange }
          onMouseLeave={ () =>  alert('Preencha com cuidado esta informação.')}
        />
      </label>
    )
  }

  render() {
    return (
      <fieldset>
        <legend>Último emprego</legend>
        { this.generateTextArea('resume', 'Resumo do currículo: ', 1000)}
        { this.generateTextArea('job', 'Cargo: ', 40)}
        { this.generateTextArea('jobDescription', 'Descrição do cargo: ', 500)}
      </fieldset>
    )
  }
}

export default ProfessionalData;
