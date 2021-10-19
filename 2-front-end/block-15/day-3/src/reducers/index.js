import { SAVE_PERSONAL_DATA, SAVE_PROFESSIONAL_DATA } from "../actions";

const INITIAL_STATE = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: 'AC'
  },
  professionalData: {
    resume: '',
    job: '',
    jobDescription: '',
  }
}

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case SAVE_PERSONAL_DATA:
      return { ...state, personalData: payload }
    case SAVE_PROFESSIONAL_DATA:
      return { ...state, professionalData: payload }
    default:
      return state;
  }
}