import { classNames } from './classNames';

describe('classNames function', () => {
  test('first argument', () => {
    expect(classNames('test')).toBe('test');
  });
  test('second argument', () => {
    expect(classNames('', { test: true, test2: true })).toBe('test test2');
  });
  test('thirty argument', () => {
    expect(classNames('', {}, ['test', 'test2'])).toBe('test test2');
  });
  test('all arguments', () => {
    expect(classNames('test', { test2: true }, ['test3'])).toBe(
      'test test2 test3',
    );
  });
});
