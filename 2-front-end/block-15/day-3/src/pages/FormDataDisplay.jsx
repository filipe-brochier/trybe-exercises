import React from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends React.Component {
  render() { 
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      resume,
      job,
      jobDescription
    } = this.props;
    return(
      <div>
        <div>Nome: {name}</div>
        <div>Email {email}</div>
        <div>CPF: {cpf}</div>
        <div>Endereço: {address}</div>
        <div>Cidade: {city}</div>
        <div>Estado: {state}</div>
        <div>Resumo do currículo: {resume}</div>
        <div>Cargo: {job}</div>
        <div>Descrição do cargo: {jobDescription}</div>
      </div>
    );
  }
}
 
const mapStateToProps = ({
  personalData: {
    name,
    email,
    cpf,
    address,
    city,
    state,
  },
  professionalData: {
    resume,
    job,
    jobDescription
  }
}) => {
  return {
    name,
    email,
    cpf,
    address,
    city,
    state,
    resume,
    job,
    jobDescription
  }
}

export default connect(mapStateToProps)(FormDataDisplay);