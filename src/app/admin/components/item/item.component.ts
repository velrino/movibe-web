import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BaseItemDto, BaseItemAlertsDto } from './item.dto';
import { EventEmitterService } from 'src/app/shared/services/event-emitter/event-emitter.service';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { AlertComponentEnum, AlertComponentTypesEnum } from 'src/app/shared/components/alerts/alert.component.enum';

export interface IBaseItemComponent {
    data: any;
    form: FormGroup;
    formItems: any;
    formRender: any;
    eventEmitterName: string;
}

@Component({
    selector: 'app-admin-item',
    templateUrl: './item.component.html',
})
export class AdminItemComponent implements OnInit {
    @Input('data') data: BaseItemDto;
    alertComponentEnum = AlertComponentEnum;
    component: IBaseItemComponent = {
        data: null,
        form: null,
        formItems: {},
        formRender: {},
        eventEmitterName: 'BaseItemComponent',
    }

    constructor(private formBuilder: FormBuilder, private _apiService: ApiService, private cdref: ChangeDetectorRef) { }

    async ngOnInit() {
        const { data } = this;
        if (data.mode == 'edit') {
            await this.baseGet();
            this.reflection(this.data.dto);

        } else if (data.mode == 'create') {
            this.reflection(this.data.dto);
        }
    }

    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }

    input() {

    }

    output(data: any) {
        EventEmitterService.get(this.component.eventEmitterName).emit({ data });
    }

    getObjectKeys() {
        return Object.keys(this.component.formItems);
    }

    getFormItem(item: string) {
        return this.component.formRender[item];
    }

    reflection(dto: any) {
        const instance = new dto();
        Object.getOwnPropertyNames(instance).forEach(item => {
            const render = instance[item];
            if (render != null) {
                this.handleInput(item, instance[item])
            }
        });
        this.component.form = this.formBuilder.group(this.component.formItems);
    }

    handleInput(name: string, render: any) {
        this.component.formRender[name] = render;
        this.defineFormGroup(name, []);
    }

    defineFormGroup(name: string, attributes: []) {
        const value = (this.data.mode == 'edit') ? this.component.data[name] : null;
        this.component.formItems = Object.assign(this.component.formItems, { [name]: [value] });
    }

    baseRenderGet(index: string) {
        return this.component.formRender[index];
    }

    baseRendeTypeIsText(index: string) {
        return this.baseRenderGet(index).type === 'text';
    }

    baseRendeTypeIsSelect(index: string) {
        return this.baseRenderGet(index).type === 'select';
    }

    baseOptionSelected(index: string, option: any) {
        return (this.baseRenderGet(index).value === option.value);
    }

    baseSubmit() {
        const { component } = this;
        if (component.form.valid) {
            if (this.data.mode == 'create') {
                this.baseCreate();
            } else if (this.data.mode == 'edit') {
                this.baseEdit();
            }
        }
    }

    baseAlert(text: string, type: AlertComponentTypesEnum) {
        EventEmitterService.get(AlertComponentEnum.input).emit({ text, type });
    }

    baseDefineAlert(index: string, { error, success }: BaseItemAlertsDto) {
        const defaultAlert: BaseItemAlertsDto = { error, success };
        return (this.data['alerts']['api'][index]) ? this.data.alerts.api[index] : defaultAlert;
    }

    async baseGet() {
        const { get } = this.data.alerts.api;
        try {
            const { error, result } = await this._apiService.get(this.data.routes.api.get);
            if (!error) {
                this.component.data = result;
            } else if (error) {
                this.baseAlert(get.error, this.alertComponentEnum.types.error);
            }
        } catch (e) {
            this.baseAlert(get.error, this.alertComponentEnum.types.error);
        }
    }

    async baseCreate() {
        const { create } = this.data.alerts.api;
        try {
            const { error } = await this._apiService.create(this.data.routes.api.create, this.component.form.value);
            if (!error) {
                this.baseAlert(create.success, this.alertComponentEnum.types.success);
            } else if (error) {
                this.baseAlert(create.error, this.alertComponentEnum.types.error);
            }
        } catch (e) {
            this.baseAlert(create.error, this.alertComponentEnum.types.error);
        }
    }

    async baseEdit() {
        const { edit } = this.data.alerts.api;
        try {
            const { error } = await this._apiService.update(this.data.routes.api.edit, this.component.form.value);
            if (!error) {
                this.baseAlert(edit.success, this.alertComponentEnum.types.success);
            } else if (error) {
                this.baseAlert(edit.error, this.alertComponentEnum.types.error);
            }
        } catch (e) {
            this.baseAlert(edit.error, this.alertComponentEnum.types.error);
        }
    }
}
