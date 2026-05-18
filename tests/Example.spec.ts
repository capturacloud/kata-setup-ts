import { Example } from '@/Example'

it('should work', () => {
  const example = new Example();

  expect(example.method()).toBe(true);
});
