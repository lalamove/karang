import omit from '../omit';

describe('omit', () => {
  it('should create a shallow copy', () => {
    const original = { name: 'Brian Garcia' };
    const copy = omit(original, []);
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  it('should drop key which are passed in', () => {
    const original = {
      name: 'Brian Garcia',
      age: 18,
    };
    expect(omit(original, ['age'])).toEqual({ name: 'Brian Garcia' });
    expect(omit(original, ['name', 'age'])).toEqual({});
  });
});
