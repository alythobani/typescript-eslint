import fs from 'node:fs';

import rules from '../../src/rules';

describe('./src/rules/index.ts', () => {
  const ruleNames = Object.keys(rules)
    .map(name => `${name}.ts`)
    .sort();
  const files = fs
    .readdirSync('./src/rules')
    .filter(file => file !== 'index.ts' && file.endsWith('.ts'));

  it('imports all available rule modules', () => {
    expect(ruleNames).toEqual(files);
  });
});
