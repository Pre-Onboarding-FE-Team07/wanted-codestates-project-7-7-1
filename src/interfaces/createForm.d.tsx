import { ReactNode, Dispatch } from 'react';

export interface FormType {
  name: string;
  defaultLabel: string;
  type: string;
  placeholder?: string;
}

export interface OptionType {
  id: string;
  name: string;
}

export interface FieldType {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: Array<OptionType>;
  description?: string;
  contents?: string;
}

export type FieldListType = FieldType[];

export interface Props {
  children: ReactNode;
}

export interface CreateFormActionType {
  type: string;
  newFields?: FieldListType;
  field?: FieldType;
  fieldId?: string;
  title?: string;
}

export interface CreateFormStateType {
  fieldList: FieldListType;
  title: string;
}

export interface FormDataContextType {
  state: CreateFormStateType;
  dispatch: Dispatch<CreateFormActionType>;
}

export interface FieldStateType {
  field: FieldType;
}

export interface FieldActionType {
  type: string;
  field?: FieldType;
  data?: object;
}

export interface FieldContextType {
  fieldState: FieldStateType;
  fieldDispatch: Dispatch<FieldActionType>;
}
