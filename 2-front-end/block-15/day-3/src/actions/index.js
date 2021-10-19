export const SAVE_PERSONAL_DATA = 'SAVE_PERSONAL_DATA';
export const SAVE_PROFESSIONAL_DATA = 'SAVE_PROFESSIONAL_DATA';

export const savePersonalData = (payload) => (
  {
    type: SAVE_PERSONAL_DATA, payload,
  });

export const saveProfessionalData = (payload) => (
  {
    type: SAVE_PROFESSIONAL_DATA, payload,
  });