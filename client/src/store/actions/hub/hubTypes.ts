import { IHubState } from '../../../@types';

export interface ISetHubAction {
    readonly type: 'SET_Hub';
    payload: IHubState;
}

export interface ISetHubLoadingAction {
    readonly type: 'SET_Hub_LOADING';
}

export interface ISetHubErrorAction {
    readonly type: 'SET_Hub_ERROR';
}

export type HubAction =
    | ISetHubAction
    | ISetHubLoadingAction
    | ISetHubErrorAction;
