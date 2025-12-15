import { CurrencyType } from './currency';

export type SoftwareProductType = {
  id?: string;
  companyId?: number;
  vendorName?: string;
  programName?: string;
  subscriptionId?: number;
  productName?: string;
  versionName?: string;
  sku?: string;
  tierMin?: number;
  tierMax?: number;
  sellPrice?: number;
  price?: number;
  unitSymbol?: string;
  unitIfUsernoshow?: string;
  priority?: number;
};

export type SoftwareProductType1 = {
  id?: number;
  arrowSku?: string;
  sku?: string;
  name?: string;
  version?: string;
  buyPrice?: number;
  sellPrice?: number;
  dateStart?: string;
  dateEnd?: string;
  buyCurrency?: CurrencyType;
  sellCurrency?: CurrencyType;
};
