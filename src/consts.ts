export const USER_INFO_KEY = 'USERINFO';
export const USER_PROFILE_PIC_KEY = 'USERPROFILEPIC';
export const USER_VACCINES_KEY = 'USERVACC';

export type UserInfo = {
  allergy: string[];
  heightFeet: string;
  heightInches: string;
  weight: string;
  bloodType: string;
  refugeeName: string;
};

export type VaccineInfo = {
  vaccineName: string;
  vaccineDate: string;
  vaccineSrc: string;
};
