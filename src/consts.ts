export const USER_INFO_KEY = 'USERINFO';
export const USER_PROFILE_PIC_KEY = 'USERPROFILEPIC';
export const USER_VACCINES_KEY = 'USERVACC';
export const LANGUAGE_PREFERENCE = 'LANGUAGE_PREFERENCE';

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

export type SymptomGroup = {
  [group: string]: string[];
};
export const translations = {
  'Pain Guide': 'Guía de Dolor',
  'Medical Resources': 'Recursos Médicos',
  'Learning Library': 'Biblioteca de Aprendizaje',
  Inbox: 'Mensajes',
  Emergency: 'Emergencia',
  Home: 'Inicio',
  Profile: 'Perfil',
  'Voice Control': 'Control de Voz',
};

export const symptomGroup: SymptomGroup = {
  'Stay Home/OTC': [
    'Aches',
    'Allergies',
    'Cold',
    'Congestion',
    'Constipation',
    'Cough',
    'Diarrhea',
    'Heartburn',
    'Migraines',
    'Mild fever',
    'Premenstrual',
    'Nausea',
    'Runny nose',
    'Small wounds',
    'Stomach Pain',
    'Sore',
    'Vomiting',
  ],
  'Scheduled Primary Care Apt': [
    'Allergies',
    'Infection',
    'Burns',
    'Minor Cuts',
    'Urinary Tract Infection',
    'Pink Eye',
    'Medication Refills',
    'Sore Throat',
  ],
  'Emergency Room': [
    'Choking',
    'Stopped breathing',
    'Chest pain or difficulty',
    'Weakness or numbness on one side of the body',
    'Slurred speech',
    'Vision problems, such as double',
    'Severe dizziness',
    'Broken bones or dislocated joints',
    'Head injuries, loss of consciousness, fainting, confusion, or seizures',
    'Severe burns and burns with blisters',
    'Severe abdominal pain',
    'Severe allergic reaction with trouble breathing, swelling, hives',
    'Uncontrolled bleeding',
    'Coughing or throwing up blood',
    'Larger cuts that may require stitches',
    'Fever over 103 degrees or fever with rash',
    'Vaginal bleeding during pregnancy',
    'Poisoning or overdose of drugs or alcohol',
    'Mental Health Crisis',
  ],
  'Urgent Care': [
    'Wheezing or mild shortness of breath',
    'Sprains or strains',
    'Minor burns without blisters',
    'Small cuts that may need stitches',
    'Fever without rash',
    'COVID-19 Symptoms',
    'Flu symptoms, sore throat, or ear pain',
    'Eye discharge',
    'Vomiting and diarrhea',
    'Painful urination',
    'Animal or insect bite',
    'Minor allergic reactions',
  ],
};

export const conditionSymptomPairing = {
  Aches: ['Muscle pain', 'Discomfort', 'Stay Home/OTC'],
  Allergies: [
    'Seasonal',
    'Histamines',
    'Nasal congestion',
    'Skin irritation',
    'Stay Home/OTC',
    'Scheduled Primary Care Apt',
  ],
  Cold: ['Common cold', 'Runny nose', 'Sneezing', 'Stay Home/OTC'],
  Congestion: ['Nasal blockage', 'Respiratory', 'Stay Home/OTC'],
  Constipation: ['Irregular bowel movement', 'Digestive', 'Stay Home/OTC'],
  Cough: ['Dry cough', 'Chest irritation', 'Stay Home/OTC', 'Emergency Room'],
  Diarrhea: [
    'Frequent bowel movements',
    'Digestive discomfort',
    'Stay Home/OTC',
    'Urgent Care',
  ],
  Heartburn: ['Acid reflux', 'Chest discomfort', 'Stay Home/OTC'],
  Migraines: ['Severe headache', 'Neurological', 'Stay Home/OTC'],
  'Mild fever': ['Slightly elevated temperature', 'Stay Home/OTC'],
  Premenstrual: ['Hormonal changes', 'Menstrual cycle', 'Stay Home/OTC'],
  Nausea: ['Queasiness', 'Upset stomach', 'Stay Home/OTC'],
  'Runny nose': ['Nasal discharge', 'Respiratory', 'Stay Home/OTC'],
  'Small wounds': ['Minor cuts', 'Bleeding', 'Stay Home/OTC'],
  'Stomach Pain': ['Abdominal discomfort', 'Indigestion', 'Stay Home/OTC'],
  Sore: ['Tenderness', 'Pain', 'Stay Home/OTC'],
  Vomiting: ['Stomach upset', 'Projectile', 'Stay Home/OTC', 'Urgent Care'],
  Infection: [
    'Bacterial or viral',
    'Inflammation',
    'Scheduled Primary Care Apt',
  ],
  Burns: [
    'Skin damage',
    'Heat',
    'Scheduled Primary Care Apt',
    'Emergency Room',
  ],
  'Minor Cuts': ['Small lacerations', 'Scheduled Primary Care Apt'],
  'Urinary Tract Infection': [
    'UTI',
    'Bladder infection',
    'Scheduled Primary Care Apt',
  ],
  'Pink Eye': ['Conjunctivitis', 'Eye infection', 'Scheduled Primary Care Apt'],
  'Medication Refills': ['Prescription drugs', 'Scheduled Primary Care Apt'],
  'Sore Throat': [
    'Throat irritation',
    'Painful swallowing',
    'Scheduled Primary Care Apt',
    'Urgent Care',
  ],
  Choking: ['Airway blockage', 'Emergency Room'],
  'Stopped breathing': ['Respiratory failure', 'Emergency Room'],
  'Chest pain or difficulty': ['Heart-related', 'Emergency Room'],
  'Weakness or numbness on one side of the body': [
    'Neurological',
    'Emergency Room',
  ],
  'Slurred speech': ['Difficulty speaking', 'Emergency Room'],
  'Vision problems': ['Blurred vision', 'Double vision', 'Emergency Room'],
  'Severe dizziness': ['Vertigo', 'Balance issues', 'Emergency Room'],
  'Broken bones or dislocated joints': ['Fractures', 'Emergency Room'],
  'Head injuries': ['Concussion', 'Trauma', 'Emergency Room'],
  'Loss of consciousness': ['Fainting', 'Emergency Room'],
  Confusion: ['Mental disorientation', 'Emergency Room'],
  Seizures: ['Convulsions', 'Neurological', 'Emergency Room'],
  'Severe burns with blisters': ['Skin damage', 'Emergency Room'],
  'Severe abdominal pain': ['Extreme discomfort', 'Emergency Room'],
  'Severe allergic reaction': ['Anaphylaxis', 'Emergency Room'],
  'Uncontrolled bleeding': ['Excessive blood loss', 'Emergency Room'],
  'Coughing or throwing up blood': ['Blood in secretions', 'Emergency Room'],
  'Larger cuts requiring stitches': ['Deep lacerations', 'Emergency Room'],
  'Fever over 103 degrees': ['High fever', 'Emergency Room'],
  'Fever with rash': ['Skin outbreak', 'Emergency Room'],
  'Vaginal bleeding during pregnancy': [
    'Pregnancy complications',
    'Emergency Room',
  ],
  'Poisoning or overdose': ['Toxic substances', 'Emergency Room'],
  'Mental Health Crisis': ['Psychological distress', 'Emergency Room'],
  Wheezing: ['Respiratory issues', 'Asthma', 'Urgent Care'],
  'Mild shortness of breath': ['Breathing issues', 'Urgent Care'],
  'Sprains or strains': ['Ligament injuries', 'Urgent Care'],
  'Minor burns without blisters': ['Skin damage', 'Urgent Care'],
  'Small cuts needing stitches': ['Minor injuries', 'Urgent Care'],
  'Fever without rash': ['Mild fever', 'Urgent Care'],
  'COVID-19 Symptoms': ['Coronavirus', 'Urgent Care'],
  'Flu symptoms': ['Influenza', 'Urgent Care'],
  'Ear pain': ['Ear infection', 'Urgent Care'],
  'Eye discharge': ['Conjunctivitis', 'Urgent Care'],
  'Painful urination': ['Urinary discomfort', 'Urgent Care'],
  'Animal or insect bite': ['Bites and stings', 'Urgent Care'],
  'Minor allergic reactions': ['Skin rash', 'Hives', 'Urgent Care'],
};
