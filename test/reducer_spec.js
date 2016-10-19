import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import * as uuid from 'uuid';

import reducer from '../src/reducer';

describe('reducer', () => {

    afterEach(() => {
        localStorage.clear();
        // remove callback
        localStorage.itemInsertionCallback = null;
    })

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                recordTypes: List.of('Pain Metrics')
            })
        }
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            recordTypes: List.of('Pain Metrics')
        }));
    });

});