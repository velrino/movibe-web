import { EventEmitter } from "@angular/core";

export class EventEmitterService {
    private static emitters: {
        [name: string]: EventEmitter<any>;
    } = {};

    static get(name: string): EventEmitter<any> {
        if (!this.emitters[name]) {
            this.emitters[name] = new EventEmitter<any>();
        }
        return this.emitters[name];
    }
}
