import { Stack } from '@/Stack'

describe('empty()', () => {
  test('empty must return true on a newly created stack', () => {
    const stack = new Stack();

    expect(stack.empty()).toBe(true);
  });

  test('empty must return false on a non empty stack', () => {
    const stack = new Stack();
    stack.push('hello');

    expect(stack.empty()).toBe(false);
  });

  test('empty must return true when you pop all elements from the stack', () => {
    const stack = new Stack();
    stack.push('hello');
    stack.pop();

    expect(stack.empty()).toBe(true);
  });

  test('empty must return false when you push more than pop', () => {
    const stack = new Stack();
    stack.push('hello');
    stack.push('world');
    stack.pop();

    expect(stack.empty()).toBe(false);
  })
})

describe('peek()', () => {
  test('peek must return null on a newly created stack', () => {
    const stack = new Stack();

    expect(stack.peek()).toBe(null);
  });

  test('peek must return the last element in the stack', () => {
    const stack = new Stack();
    stack.push('hello');

    expect(stack.peek()).toBe('hello');
  });
})

describe('size()', () => {test('size must return 0 on a newly created stack', () => {
  const stack = new Stack();

  expect(stack.size()).toBe(0);
});

  test('size must return 1 when you push one element', () => {
    const stack = new Stack();
    stack.push('hello');

    expect(stack.size()).toBe(1);
  });

  test('size must return 2 when you push two elements', () => {
    const stack = new Stack();
    stack.push('hello');
    stack.push('world');

    expect(stack.size()).toBe(2);
  });

  test('size must return the amount of elements in the stack', () => {
    const stack = new Stack();
    stack.push('hello');
    stack.push('world');
    stack.pop();

    expect(stack.size()).toBe(1);
  });
})
