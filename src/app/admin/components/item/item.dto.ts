export interface BaseItemRoutesDto {
    get?: string;
    create?: string;
    delete?: string;
    edit?: string;
    list?: string;
}

export interface BaseItemRoutesAlertsDto {
    get?: BaseItemAlertsDto;
    create?: BaseItemAlertsDto;
    delete?: BaseItemAlertsDto;
    edit?: BaseItemAlertsDto;
    list?: BaseItemAlertsDto;
}

export interface BaseItemAlertsDto {
    success?: string;
    error?: string;
}

export interface BaseItemDto {
    alerts?: {
        api: BaseItemRoutesAlertsDto,
    };
    id?: string;
    data?: any;
    dto: any;
    mode: 'create' | 'edit' | 'view';
    routes?: {
        api?: BaseItemRoutesDto
        web?: BaseItemRoutesDto
    };
}

export interface BaseItemRenderDtoOption {
    value: string | number;
    label: string;
}

export interface BaseItemRenderDto {
    label: string;
    type: 'text' | 'select' | 'textarea' | 'checkbox' | 'date' | 'email' | 'file' | 'image' | 'number' | 'password' | 'url' | 'tel';
    validator?: string[];
    options?: BaseItemRenderDtoOption[];
    order?: number;
    required?: boolean;
    value?: number | string;
    placeholder?: string;
}


