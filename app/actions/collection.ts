import { Action } from '@ngrx/store';
import { type } from './../util';
import { Annotation } from './../models/annotation';

export const ActionTypes = {
  ADD_ANNOTATION:             type('[Collection] Add Annotation'),
  ADD_ANNOTATION_SUCCESS:     type('[Collection] Add Annotation Success'),
  ADD_ANNOTATION_FAIL:        type('[Collection] Add Annotation Fail'),
  REMOVE_ANNOTATION:          type('[Collection] Remove Annotation'),
  REMOVE_ANNOTATION_SUCCESS:  type('[Collection] Remove Annotation Success'),
  REMOVE_ANNOTATIONn_FAIL:     type('[Collection] Remove Annotation Fail'),
  LOAD:                 type('[Collection] Load'),
  LOAD_SUCCESS:         type('[Collection] Load Success'),
  LOAD_FAIL:            type('[Collection] Load Fail'),
};


/**
 * Add Annotation to Collection Actions
 */
export class AddAnnotationAction implements Action {
  type = ActionTypes.ADD_ANNOTATION;

  constructor(public payload: Annotation) { }
}

export class AddAnnotationSuccessAction implements Action {
  type = ActionTypes.ADD_ANNOTATION_SUCCESS;

  constructor(public payload: Annotation) { }
}

export class AddAnnotationFailAction implements Action {
  type = ActionTypes.ADD_ANNOTATION_FAIL;

  constructor(public payload: Annotation) { }
}


/**
 * Removje Annotation from Collection Actions
 */
export class RemoveAnnotationAction implements Action {
  type = ActionTypes.REMOVE_ANNOTATION;

  constructor(public payload: Annotation) { }
}

export class RemoveAnnotationSuccessAction implements Action {
  type = ActionTypes.REMOVE_ANNOTATION_SUCCESS;

  constructor(public payload: Annotation) { }
}

export class RemoveAnnotationFailAction implements Action {
  type = ActionTypes.REMOVE_ANNOTATIONn_FAIL;

  constructor(public payload: Annotation) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Annotation[]) { }
}

export class LoadFailAction implements Action {
  type = ActionTypes.LOAD_FAIL;

  constructor(public payload: any) { }
}


export type Actions
  = AddAnnotationAction
  | AddAnnotationSuccessAction
  | AddAnnotationFailAction
  | RemoveAnnotationAction
  | RemoveAnnotationSuccessAction
  | RemoveAnnotationFailAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction