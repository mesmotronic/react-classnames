import { describe, it, expect } from 'vitest';
import { classNames } from './index';

describe('classNames', () => {
  it('should concatenate class names correctly', () => {
    const result = classNames('btn', 'btn-primary', null, undefined, false, '  extra-class  ');
    expect(result).toBe('btn btn-primary extra-class');
  });

  it('should return an empty string when no valid class names are provided', () => {
    const result = classNames(null, undefined, false);
    expect(result).toBe('');
  });

  it('should handle trimming of class names', () => {
    const result = classNames('  btn  ', '  btn-primary  ');
    expect(result).toBe('btn btn-primary');
  });
});