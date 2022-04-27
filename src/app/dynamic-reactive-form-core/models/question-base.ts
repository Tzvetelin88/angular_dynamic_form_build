export type QuestionBase<T> = {
  controlType: "textbox" | "checkbox" | "dropdown" | "radiobox";
  name: string;
  label: string;
  value?: T | undefined;
  required?: boolean;
  type?: string;
  options?: { key: string; value: string }[];
  validations?: any[];
  placeholder?: string;
  tooltip?: string;
  errorMessage?: string;
  dependOn?: string | string[];
};

export type QuestionFormGroups = { [group: string]: QuestionBase<any>[] };
