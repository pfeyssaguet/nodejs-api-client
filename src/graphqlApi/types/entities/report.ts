import { CountableType } from './counting';
import { GraphqlApiOrderSoftwareType } from './order';
import { SubscriptionType } from './subscription';
import { SoftwareProductType } from './softwareProduct';
import { UserType } from './user';

export type GraphqlApiReportType = {
  id?: number;
  adminNote?: string;
  createdAt?: string;
  endedAt?: string;
  items?: GraphqlApiReportItemType[];
  lastUpdatedAt?: string;
  reportMonth?: string;
  subscription?: SubscriptionType;
  totalAmount?: number;
  userNote?: string;
  quantityCount?: number;
  quantitySum?: CountableType;
  order?: GraphqlApiOrderSoftwareType;
  status?: GraphqlApiReportStatusType;
};

export type GraphqlApiReportItemType = {
  id?: number;
  quantity?: number;
  report?: GraphqlApiReportType;
  softwareProduct?: SoftwareProductType;
};

export type GraphqlApiReportStatusType = {
  id?: number;
  name?: string;
};

export type GraphqlApiReportHistoryType = {
  id?: number;
  action?: string;
  createdAt?: string;
  description?: string;
  report?: GraphqlApiReportType;
  user?: UserType;
};
