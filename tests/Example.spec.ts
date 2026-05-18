import { Example } from '../src/Example'

it('should work', () => {
  const example = new Example();

  expect(example.method()).toBe(true);
});