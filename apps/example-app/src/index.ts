import { exampleFunc } from '@dotdev/example-package/exampleFunc';

function someFunc(): string {
  const ok = exampleFunc(1, 2);
  return 'Hello from @shared!';
}

export default someFunc;
