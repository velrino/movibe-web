import { Injectable } from '@angular/core';

import { RequestService, RequestResponseDto } from 'src/app/shared/services/request/request.service';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private _requestService: RequestService) { }

    async list(route: string, page: number = 1, per_page: number = 10): Promise<RequestResponseDto> {
        return await this._requestService.requestWithToken('GET',
            `api/${route}?sort=updatedAt,DESC&page=${page}&per_page=${per_page}`);
    }

    async get(route: string): Promise<RequestResponseDto> {
        return await this._requestService.requestWithToken('GET', `api/${route}`);
    }

    async create(route: string, body: any): Promise<RequestResponseDto> {
        return await this._requestService.requestWithToken('POST', `api/${route}`, body);
    }

    async update(route: string, body: any): Promise<RequestResponseDto> {
        return await this._requestService.requestWithToken('PUT', `api/${route}`, body);
    }

    async delete(route: string): Promise<RequestResponseDto> {
        return await this._requestService.requestWithToken('DELETE', `api/${route}`);
    }
}
