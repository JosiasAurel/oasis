import './test-utils/setup';
import { Client } from '.';

const client = new Client({
  token: process.env.TOKEN,
});

test('gets `currentUser` data', async () => {
  const data = await client
    .createQueryBuilder('currentUser')
    .addFields({
      id: true,
      isBot: true,
      answers: {
        ARGS: {
          limit: 50,
          offset: 0,
        },
        items: {
          id: true,
        },
      },
    })
    .send();

  expect(data).toBeTruthy();
  expect(data).toBeInstanceOf(Object);
});

// describe('Nothing', () => {
//   it('pass', () => {
//     expect(true).toBe(true);
//   });
// });
