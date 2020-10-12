import React from 'react';
import {isLoading} from "./module";

describe('isLoading', () => {
  it('initial state', () => {
    const param = {submitted: false, error: false, success: false};
    const actual = isLoading(param);
    const expected = false;

    expect(expected).toBe(actual);
  });

  it('submitted, no results', () => {
    const param = {submitted: true, error: false, success: false};
    const actual = isLoading(param);
    const expected = true;

    expect(expected).toBe(actual);
  });

  it('submitted, error', () => {
    const param = {submitted: true, error: true, success: false};
    const actual = isLoading(param);
    const expected = false;

    expect(expected).toBe(actual);
  });

  it('submitted, success', () => {
    const param = {submitted: true, error: false, success: true};
    const actual = isLoading(param);
    const expected = false;

    expect(expected).toBe(actual);
  });
});


