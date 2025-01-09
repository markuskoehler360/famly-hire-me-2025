export interface Child {
  childId: string;
  institutionId: string;
  groupId: string;
  createdTime: Date;
  name: Name;
  birthday: Date;
  homeAddress: null;
  extraInfo: string;
  language: string;
  nationality: string;
  birthplace: string;
  gender: number;
  startDate: Date;
  endDate: null;
  leavingReason: null;
  isTestChild: boolean;
  relations: null;
  image: Image;
  isSleeping: boolean;
  naps: unknown[];
  hasVacation: boolean;
  isSick: boolean;
  isAbsent: boolean;
  leaves: unknown[];
  onBus: boolean;
  onTrip: boolean;
  statuses: unknown[];
  statusRegistrations: unknown[];
  checkins: Checkin[];
  checkedIn: boolean;
  checkinTime: Date;
  pickupTime: null;
  pickupRelationId: string;
  pickupName: string;
}

export interface Checkin {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: Date;
  pickupTime: null;
  pickupRelationId: string;
  goHomeWithChildId: string;
  checkoutTime: null;
  checkinLoginId: string;
  checkoutLoginId: string;
  autoCheckedOut: boolean;
  deletedAt: null;
  hours: null;
  checkinStatements: null;
}

export interface Image {
  small: string;
  large: string;
  empty: boolean;
  colorCode: number;
}

export interface Name {
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface CheckinResponse {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: Date;
  pickupTime: Date;
  pickupRelationId: string;
  goHomeWithChildId: string;
  checkoutTime: null;
  checkinLoginId: string;
  checkoutLoginId: string;
  autoCheckedOut: boolean;
  deletedAt: null;
  hours: null;
  checkinStatements: null;
}
