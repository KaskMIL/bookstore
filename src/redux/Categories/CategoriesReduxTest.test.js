import * as actions from './CategoriesRedux';

test('Check status', () => {
  const initial = [];
  expect(actions.default(initial, actions.checkStatus())).toEqual('Under construction');
});

test('Unknown action', () => {
  const initial = [];
  const action = () => ({ type: 'unknown' });
  expect(actions.default(initial, action)).toEqual(initial);
});
