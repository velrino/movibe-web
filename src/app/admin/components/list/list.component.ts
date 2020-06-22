import { Injectable } from '@angular/core';

import { EventEmitterService } from 'src/app/shared/services/event-emitter/event-emitter.service';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { AlertComponentEnum, AlertComponentTypesEnum } from 'src/app/shared/components/alerts/alert.component.enum';

@Injectable()
export class ListComponent {
    constructor(private _apiService: ApiService) { }
    columns: {} = {}
    component: string;
    currentPage: number = 1;
    data: any[] = [];
    dataItemId: string;
    itensPerPage = 20;
    page: number = 1;
    totalPages: number = 5;
    alertComponentEnum = AlertComponentEnum;
    routes = {
        api: {
            list: null,
            delete: null,
        },
        web: {
            create: null,
            edit: null,
        },
    };
    alerts = {
        api: {
            delete: { success: 'Deletado com sucesso', error: 'Falha ao deletar' },
        },
    }

    baseRoute(route: string): string {
        const basePath = '/admin/';
        return basePath.concat(route);
    }

    baseGoToCreatePage(): void {
        window.location.href = this.baseRoute(this.routes.web.create);
    }

    baseGoToEditPage(): void {
        window.location.href = this.baseRoute(this.routes.web.edit);
    }

    basePaginationInput(response: any) {
        this.data = response.data;
        this.totalPages = response.total;
    }

    baseDefineDataItemId(id: string) {
        this.dataItemId = id;
    }

    baseDefineCurrentNumberPage(actualNumber: number) {
        this.currentPage = actualNumber;
    }

    baseAlert(text: string, type: AlertComponentTypesEnum) {
        EventEmitterService.get(AlertComponentEnum.input).emit({ text, type });
    }

    baseChangePage(actualNumber: number) {
        this.baseDefineCurrentNumberPage(actualNumber);
        this.baseGetData();
    }

    async baseGetData() {
        const { error, result } = await this._apiService.list(this.routes.api.list, this.currentPage, this.itensPerPage);
        if (!error) {
            this.basePaginationInput(result);
        }
    }

    async baseDelete() {
        try {
            const { error } = await this._apiService.delete(this.routes.api.delete);
            if (!error) {
                this.baseAlert(this.alerts.api.delete.success, this.alertComponentEnum.types.success);
                this.baseGetData();
            } else if (error) {
                this.baseAlert(this.alerts.api.delete.error, this.alertComponentEnum.types.error);
            }
        } catch (e) {
            this.baseAlert(this.alerts.api.delete.error, this.alertComponentEnum.types.error);
        }
    }

    baseColumnsToArray() {
        return Object.keys(this.columns);
    }

    baseGetColumn(column: string) {
        return this.columns[column];
    }
}
