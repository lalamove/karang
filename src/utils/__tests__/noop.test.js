import noop from '../noop';

describe('noop', () => {
  it('should be a function', () => {
    expect(typeof noop).toBe('function');
  });

  it('should not return anything', () => {
    expect(noop()).toBeUndefined();
    expect(noop('some args', 1, 2, [3])).toBeUndefined();
  });
});
