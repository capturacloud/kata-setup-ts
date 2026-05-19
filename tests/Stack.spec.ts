import { Stack } from '@/Stack'

test('empty must return true on a newly created stack', () => {
  const stack = new Stack();

  expect(stack.empty()).toBe(true);
});
