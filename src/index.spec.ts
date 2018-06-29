// tslint:disable:no-expression-statement
import { test } from 'ava';
import objectFetch from './index';

const object = { a: 'b' };

test('double', t => {
  t.is(objectFetch(object, 'a'), 'b');
});

test('power', async t => {
  const error = await t.throws(() => {
    objectFetch(object, 'c');
  });
  t.is(error.message, 'No such property: c');
});
