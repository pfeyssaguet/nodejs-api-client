import { AbstractEntity } from '../../abstractEntity';

export type ReportPlanOptionType = {
  name: string;
  sku: string;
  points: number;
  buyPrice: number;
  sellPrice: number;
  currency: string;
};

export class ReportPlanOption extends AbstractEntity<ReportPlanOptionType> {
  readonly #name: string;
  readonly #sku: string;
  readonly #points: number;
  readonly #buyPrice: number;
  readonly #sellPrice: number;
  readonly #currency: string;

  public constructor(reportPlanOptionData: ReportPlanOptionType) {
    super(reportPlanOptionData);
    this.#name = reportPlanOptionData.name;
    this.#sku = reportPlanOptionData.sku;
    this.#points = reportPlanOptionData.points;
    this.#buyPrice = reportPlanOptionData.buyPrice;
    this.#sellPrice = reportPlanOptionData.sellPrice;
    this.#currency = reportPlanOptionData.currency;
  }

  get name(): string {
    return this.#name;
  }

  get sku(): string {
    return this.#sku;
  }

  get points(): number {
    return this.#points;
  }

  get buyPrice(): number {
    return this.#buyPrice;
  }

  get sellPrice(): number {
    return this.#sellPrice;
  }

  get currency(): string {
    return this.#currency;
  }

  public toJSON(): ReportPlanOptionType {
    return {
      name: this.#name,
      sku: this.#sku,
      points: this.#points,
      buyPrice: this.#buyPrice,
      sellPrice: this.#sellPrice,
      currency: this.#currency,
    };
  }
}
