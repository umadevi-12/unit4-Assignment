export enum VisitType {
  DineIn = "DINE_IN",
  TakeAway = "TAKE_AWAY",
  Delivery = "DELIVERY",
}

export enum RatingScale {
  One = 1,
  Two,
  Three,
  Four,
  Five,
}

export interface Customer {
  name: string;
  email?: string;
}

export interface Feedback {
  id: string;
  submittedAt: string;
  customer: Customer;
  visitType: VisitType;
  ratings: {
    food: RatingScale;
    service: RatingScale;
    ambience: RatingScale;
  };
  comments?: string;
}
