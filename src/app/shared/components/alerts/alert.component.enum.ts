export interface IAlertComponentEventService {
    text: string;
    type: AlertComponentTypesEnum;
}

export enum AlertComponentTypesEnum {
    success = 'alert-success',
    info = 'alert-primary',
    error = 'alert-danger'
}

export const AlertComponentEnum = {
    input: 'AlertComponentInput',
    output: 'AlertComponentOutput',
    types: AlertComponentTypesEnum
}
