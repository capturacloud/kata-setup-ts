import { Stack } from '@/Stack'

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

test('peek must return null on a newly created stack', () => {
  const stack = new Stack();

  expect(stack.peek()).toBe(null);
})
