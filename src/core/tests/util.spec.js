// $(yarn bin)/jest --env=jsdom ./src/components/tests/component.spec.js --watch
import { filterCompletedTasks } from '../utils';

describe('src | core | utils', () => {
  describe('filterCompletedTasks', () => {
    it('return only uncompleted tasks', () => {
      const value = [{ checked: true }, { checked: false }];
      const expected = [{ checked: false }];
      const result = filterCompletedTasks(value);
      expect(result).toStrictEqual(expected);
    });
  });
});
