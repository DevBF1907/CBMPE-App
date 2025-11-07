export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  OccurrenceList: undefined;
  OccurrenceForm: undefined;
  OccurrenceDetail: { occurrenceId: string };
  Signature: { occurrenceId: string };
  Profile: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type MainStackParamList = {
  Dashboard: undefined;
  OccurrenceList: undefined;
  OccurrenceForm: undefined;
  OccurrenceDetail: { occurrenceId: string };
  Signature: { occurrenceId: string };
  Profile: undefined;
};
