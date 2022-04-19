export type QuestionBase<T> = {
  value?: T | undefined;
  name?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: { key: string; value: string }[];
  validations?: any[];
  errorMessage?: string;
};

export type QuestionFormGroups = { [group: string]: QuestionBase<any>[] };
