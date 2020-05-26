import {  Type, ComponentRef } from '@angular/core';

export class Tab {
    constructor(public Title: string,
        public Id: number,
        public IsActive: boolean,
        public Component: Type<any>,
        public IsInitialized: boolean = false,
        public ComponentRef: ComponentRef<any>) {
    }
}