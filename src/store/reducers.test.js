import React from 'react';

import {
  defaultReducer,
  defaultState,
  initialResults,
  SEARCH_FAILURE,
  SEARCH_SUBMITTED,
  SEARCH_SUCCESS, SET_FILTER, SET_SORT, TOGGLE_CONTROLS
} from "./reducers";

const testValue = "__test__123";

describe('defaultReducer', () => {
  it('null', () => {
    const newState = defaultReducer();

    expect(newState).toStrictEqual(defaultState);
  });

  it('submitted', () => {
    const newState = defaultReducer(defaultState, {type: SEARCH_SUBMITTED, data: testValue});

    expect(newState).toStrictEqual({
      ...defaultState,
      submitted: true,
      success: false,
      error: false,
      results: initialResults,
      lastSearchValue: testValue,
    });
  });

  it('success', () => {
    const newState = defaultReducer(defaultState, {type: SEARCH_SUCCESS, data: testValue});

    expect(newState).toStrictEqual({
      ...defaultState,
      success: true,
      error: false,
      results: testValue,
    });
  });

  it('error', () => {
    const newState = defaultReducer(defaultState, {type: SEARCH_FAILURE, data: testValue});

    expect(newState).toStrictEqual({
      ...defaultState,
      success: false,
      error: true,
      results: initialResults,
    });
  });

  it('set filter', () => {
    const newState = defaultReducer(defaultState, {type: SET_FILTER, data: testValue});

    expect(newState).toStrictEqual({
      ...defaultState,
      filter: testValue,
    });
  });

  it('set sort', () => {
    const newState = defaultReducer(defaultState, {type: SET_SORT, data: testValue});

    expect(newState).toStrictEqual({
      ...defaultState,
      sort: testValue,
    });
  });

  it('toggle controls - off', () => {
    const newState = defaultReducer({...defaultState, showControls: true}, {type: TOGGLE_CONTROLS, data: false});

    expect(newState).toStrictEqual({
      ...defaultState,
      showControls: false,
    });
  });

  it('toggle controls - on', () => {
    const newState = defaultReducer({...defaultState}, {type: TOGGLE_CONTROLS, data: true});

    expect(newState).toStrictEqual({
      ...defaultState,
      showControls: true,
    });
  });
});



