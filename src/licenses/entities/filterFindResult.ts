import { AbstractEntity } from '../../abstractEntity';
import { LicenseFindResultFields } from './license/licenseFindResult';

type FilterFindResultDataIterable = {
  [field in LicenseFindResultFields]?: unknown;
};

/**
 * Filter data values
 */
export type FilterFindResultDataValues =
  | FilterFindResultDataIterable
  | LicenseFilterAggregationType[];

export type LicenseFilterAggregationType = {
  count: number;
  values: string[];
};

/**
 * Filter data
 */
export type FilterFindResultData = {
  [FilterFindFields.COLUMN_NAME]: string;
  [FilterFindFields.COLUMN_VALUES]: FilterFindResultDataValues;
};

/**
 * Filter data fields
 */
export enum FilterFindFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUES = 'values',
}

/**
 * Represents the result of the find response's filters part.
 */
export class FilterFindResult extends AbstractEntity<FilterFindResultData> {
  readonly #name: string;
  readonly #values: FilterFindResultDataValues;

  protected VALIDATION_RULES = {
    [FilterFindFields.COLUMN_NAME]: 'present',
    [FilterFindFields.COLUMN_VALUES]: 'present|array',
    [`${FilterFindFields.COLUMN_VALUES}.*.value`]: 'present',
    [`${FilterFindFields.COLUMN_VALUES}.*.count`]: 'required|numeric',
  };

  /**
   * FilterFindResult constructor.
   *
   * @param data - Filter result data
   */
  public constructor(data: FilterFindResultData) {
    super(data);

    this.#name = data['name'];
    this.#values = data['values'];
  }

  public get name(): string {
    return this.#name;
  }

  public get values(): FilterFindResultDataValues {
    return this.#values;
  }

  /**
   * Plain JSON object representation of the filter entity.
   * @returns {@link FilterFindResultData}
   */
  public toJSON(): FilterFindResultData {
    return {
      [FilterFindFields.COLUMN_NAME]: this.name,
      [FilterFindFields.COLUMN_VALUES]: this.values,
    };
  }
}
