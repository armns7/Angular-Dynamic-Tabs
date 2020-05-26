import { Tab } from './tab.model';
import { ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface IScreen {

    Tab: Tab,
    ComponentRef:ComponentRef<any>
    //, OnScreenClose: Subject<any>
}

