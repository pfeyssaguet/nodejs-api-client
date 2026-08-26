import { AbstractEntity } from '../../abstractEntity';
import { ReportPlanOption, ReportPlanOptionType } from './reportPlanOption';

export type ReportPlanType = {
  options: ReportPlanOptionType[];
};

export class ReportPlan extends AbstractEntity<ReportPlanType> {
  readonly #options: ReportPlanOption[];

  public constructor(reportPlanData: ReportPlanType) {
    super(reportPlanData);
    this.#options = reportPlanData.options.map(
      (option: ReportPlanOptionType) => new ReportPlanOption(option),
    );
  }

  get options(): ReportPlanOption[] {
    return this.#options;
  }

  public toJSON(): ReportPlanType {
    return {
      options: this.#options.map((option: ReportPlanOption) => option.toJSON()),
    };
  }
}
