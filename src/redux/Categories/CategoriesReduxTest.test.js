import * as actions from './CategoriesRedux';

test('Check status', () => {
  const initial = [];
  expect(actions.default(initial, actions.check_status())).toEqual('Under construction');
})

test('Unknown action', () => {
  const initial = [];
  const action = () => {return {type: 'unknown'}};
  expect(actions.default(initial, action)).toEqual(initial);
})