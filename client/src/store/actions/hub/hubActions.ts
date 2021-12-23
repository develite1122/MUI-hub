import axios from 'axios';

import { IHubState } from '../../../@types';
import {
    ISetHubAction,
    ISetHubLoadingAction,
    ISetHubErrorAction,
    HubAction,
} from './hubTypes';
import { ThunkAction } from 'redux-thunk';

export const setHub = (Hub: IHubState): ISetHubAction => ({
    type: 'SET_Hub',
    payload: Hub,
});

export const setHubLoading = (): ISetHubLoadingAction => ({
    type: 'SET_Hub_LOADING',
});

export const setHubError = (): ISetHubErrorAction => ({
    type: 'SET_Hub_ERROR',
});

export const getHub = (): ThunkAction<
    Promise<HubAction>,
    {},
    {},
    HubAction
> => async (dispatch) => {
    dispatch(setHubLoading());

    try {
        const response = await axios.get('/hub');
        const Hub: IHubState = response.data;
        console.log("called");
        return dispatch(setHub(Hub));
    } catch (error) {
        return dispatch(setHubError());
    }
};
