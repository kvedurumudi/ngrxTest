import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Annotation } from './../models/annotation';

import * as annotation from '../actions/annotation.actions';
import * as collection from '../actions/collection';


export interface State {
    ids: string[];
    entities: { [id: string]: Annotation };
    selectedAnnotationId: string | null;
};

const initialState: State = {
    ids: [],
    entities: {},
    selectedAnnotationId: null,
};

export function reducer(state = initialState, action: annotation.Actions | collection.Actions): State {
    switch (action.type) {
        case annotation.ActionTypes.SEARCH_COMPLETE:
        case collection.ActionTypes.LOAD_SUCCESS: {
            const annotations = action.payload;
            const newannotations = annotations.filter(annotation => !state.entities[annotation.id]);

            const newannotationIds = newannotations.map(annotation => annotation.id);
            const newannotationEntities = newannotations.reduce((entities: { [id: string]: Annotation }, annotation: Annotation) => {
                return Object.assign(entities, { [annotation.id]: annotation });
            }, {});

            return {
                ids: [...state.ids, ...newannotationIds],
                entities: Object.assign({}, state.entities, newannotationEntities),
                selectedAnnotationId: state.selectedAnnotationId
            };
        }

        case annotation.ActionTypes.LOAD: {
            const annotation = action.payload;

            if (state.ids.indexOf(annotation.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, annotation.id],
                entities: Object.assign({}, state.entities, { [annotation.id]: annotation }),
                selectedAnnotationId: state.selectedAnnotationId
            };
        }

        case annotation.ActionTypes.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedAnnotationId: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export function getannotationEntities(state$: Observable<State>) {
    return state$.select(state => state.entities);
}

export function getannotationIds(state$: Observable<State>) {
    return state$.select(state => state.ids);
}

export function getSelectedannotationId(state$: Observable<State>) {
    return state$.select(state => state.selectedAnnotationId);
}

export function getSelectedannotation(state$: Observable<State>) {
    return combineLatest<{ [id: string]: Annotation }, string>(
        state$.let(getannotationEntities),
        state$.let(getSelectedannotationId)
    )
        .map(([entities, selectedannotationId]) => entities[selectedannotationId]);
}

export function getAllannotations(state$: Observable<State>) {
    return combineLatest<{ [id: string]: Annotation }, string[]>(
        state$.let(getannotationEntities),
        state$.let(getannotationIds)
    )
        .map(([entities, ids]) => ids.map(id => entities[id]));
}