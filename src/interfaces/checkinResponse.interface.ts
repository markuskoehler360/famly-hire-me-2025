export interface ICheckinResponse {
  childCheckinId: string;
  childId: string;
  institutionId: string;
  groupId: string;
  checkinTime: string;
  pickupTime: string;
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
