// @ts-nocheck
import { request } from '../request';

import { depts } from '../../mocks/api/depts.mock.json';

describe('utils', () => {
    describe('request', () => {
        it('should load depts and handle them in case of success', async () => {
            // eslint-disable-next-line max-nested-callbacks
            global.fetch = jest.fn(() =>
                Promise.resolve({
                    // eslint-disable-next-line max-nested-callbacks
                    json: () => Promise.resolve(depts),
                })
            );

            const json = await request('/');

            expect(json).toEqual(depts);
        });

        it('should handle errors in case of fail', async () => {
            const error = { message: 'Some error is thrown' };

            global.fetch = jest.fn(() => Promise.reject(error));

            try {
                await request('/');
            } catch (e) {
                expect(e.message).toEqual(error.message);
            }
        });
    });
});
