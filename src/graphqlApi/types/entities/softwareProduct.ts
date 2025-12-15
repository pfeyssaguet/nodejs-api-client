import { CurrencyType } from './currency';

export type SoftwareProductType = {
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
