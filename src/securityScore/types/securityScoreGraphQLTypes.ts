export type FilterType = {
  name?: string;
  values?: FilterValuesType[];
};

export type FilterValuesType = {
  count?: number;
  value?: string;
};

export type PaginationsType = {
  currentPage?: number;
  next?: string;
  perPage?: number;
  previous?: string;
  total?: number;
  totalPage?: number;
};

export type SubscriptionRegistrationType = {
  reference: string;
};

export type CustomerRegistrationType = {
  name?: string;
  reference?: string;
};

export type ResellerRegistrationType = {
  name?: string;
  reference?: string;
};

export type RegistrationType = {
  accountReference?: string;
  customer?: CustomerRegistrationType;
  marketplace?: string;
  reseller?: ResellerRegistrationType;
  subscription?: SubscriptionRegistrationType;
  vendorCode?: string;
};

export type CheckType = {
  description?: string;
  flagged?: number;
  group?: string;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  reference?: string;
  score?: number;
  severity?: string;
};

export type StandardType = {
  currentScore?: number;
  checks?: CheckType[];
  failed?: number;
  maxScore?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
  total?: number;
};

export type AccountType = {
  failed?: number;
  name?: string;
  passed?: number;
  reference?: string;
  score?: number;
  standards?: StandardType[];
  total?: number;
};

export type ScoreResultType = {
  account?: AccountType;
  registration?: RegistrationType;
};

export type NameCountByDateAggType = {
  count?: number;
  date?: string;
};

export type SeverityAggType = {
  data?: NameCountByDateAggType[];
  last?: NameCountByDateAggType;
  name?: string;
  progression?: number;
};

export type SeveritiesAggType = {
  severities?: SeverityAggType[];
};

export type CheckCountByDateAggType = {
  count?: number;
  accounts?: number;
  customers?: number;
  partners?: number;
  date?: string;
};

export type CheckAggType = {
  data?: CheckCountByDateAggType[];
  last?: CheckCountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
  vendorCode?: string;
};

export type ChecksAggType = {
  checks: CheckAggType[];
};

export type EndCustomerByDateAggType = {
  accounts?: number;
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  total?: number;
  subscriptionReferences?: number;
};

export type EndCustomerAggType = {
  data?: EndCustomerByDateAggType[];
  last?: EndCustomerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type UnregisteredOfferIaasSubscriptionType = {
  partnerRef?: string;
  friendlyName?: string;
  vendorSubscriptionId?: string;
};

export type UnregisteredOfferIaasType = {
  sku?: string;
  name?: string;
  subscriptions?: UnregisteredOfferIaasSubscriptionType[];
};

export type UnregisteredOfferSaasType = {
  name?: string;
  subscription?: string;
};

export type UnregisteredOffersType = {
  iaas?: UnregisteredOfferIaasType[];
  saas?: UnregisteredOfferSaasType[];
};

export type UnregisteredEndCustomerAggType = {
  name?: string;
  reference?: string;
  offers?: UnregisteredOffersType;
};

export type EndCustomersAggType = {
  customers?: EndCustomerAggType[];
  unregisteredCustomers?: UnregisteredEndCustomerAggType[];
};

export type PartnerByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  total?: number;
};

export type PartnerAggType = {
  data?: PartnerByDateAggType[];
  last?: PartnerByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type PartnersAggType = {
  partners?: PartnerAggType[];
};

export type ScoreByMonthAggType = {
  avgCurrentScore?: number;
  date?: string;
};

export type MonthlyTrendAggType = {
  avgCurrentScore?: number;
  period?: PeriodsType;
  scores?: ScoreByMonthAggType[];
};

export type ScoreByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  passed?: number;
  total?: number;
};

export type ScoresAggType = {
  last?: ScoreByDateAggType;
  scores?: ScoreByDateAggType[];
};

export type AccountByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  name?: string;
  passed?: number;
  total?: number;
};

export type AccountAggType = {
  data?: AccountByDateAggType[];
  last?: AccountByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type AccountsAggType = {
  accounts?: AccountAggType[];
  unregisteredAccounts?: UnregisteredOffersType;
};

export type StandardByDateAggType = {
  date?: string;
  score?: number;
  failed?: number;
  passed?: number;
  total?: number;
};

export type StandardAggType = {
  data?: StandardByDateAggType[];
  last?: StandardByDateAggType;
  name?: string;
  progression?: number;
  reference?: string;
};

export type StandardsAggType = {
  standards: StandardAggType[];
};

export type MarketplacePartnerAggByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
  failed?: number;
  passed?: number;
  total?: number;
};

export type MarketplaceByDateAggType = {
  avgCurrentScore?: number;
  date?: string;
};

export type MarketplacePartnerAggType = {
  data?: MarketplacePartnerAggByDateAggType[];
  last?: MarketplacePartnerAggByDateAggType;
  name?: string;
  reference?: string;
  progression?: number;
};

export type MarketplaceAggType = {
  data?: MarketplaceByDateAggType[];
  last?: MarketplaceByDateAggType;
  name?: string;
  partners?: MarketplacePartnerAggType[];
  progression?: number;
};

export type MarketplacesAggType = {
  marketplaces: MarketplaceAggType[];
};

export type CheckByDateType = {
  date?: string;
  flagged?: number;
  isFailed?: boolean;
  name?: string;
  processed?: number;
  score?: number;
};

export type ChecksByStandardType = {
  data?: CheckByDateType[];
  description?: string;
  last?: CheckByDateType;
  name?: string;
  progression?: number;
  reference?: string;
  severity?: string;
};

export type StandardWithCheckType = {
  checks?: ChecksByStandardType[];
  name?: string;
  reference?: string;
};

export type PeriodsType = {
  from?: string;
  to?: string;
};
