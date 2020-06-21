import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class RequestResponseDto {
    result: any;
    error: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class RequestService {
    constructor(private _http: HttpClient) { }

    async request(
        address: string = null,
        method = 'GET',
        body = null,
        headers = null,
        params = null,
    ): Promise<RequestResponseDto> {
        const response: RequestResponseDto = { error: false, result: null };

        await this._http
            .request(method, address, {
                body,
                params,
                headers,
                reportProgress: null,
                withCredentials: null,
                responseType: null,
            })
            .toPromise()
            .then(result => Object.assign(response, { error: false, result }))
            .catch(result => Object.assign(response, { error: true, result }))
            .finally(() => { });
        return response;
    }

    async requestWithToken(
        method = 'GET',
        url,
        body = null,
        headers = {},
        params = null) {
        let acessToken: any = JSON.parse(localStorage.getItem('token'));

        let token = acessToken.accessToken;

        const sendHeaders = {
            Authorization: `Bearer ${token}`,
            ...headers,
        }
        let address = '/' + url;
        return await this.request(address, method, body, sendHeaders, params)
    }
}
