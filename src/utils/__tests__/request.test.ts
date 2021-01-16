/* eslint-disable max-nested-callbacks */
import { request } from '../request';

import { depts } from '../../mocks/api/depts.mock.json';

describe('utils', () => {
    describe('request', () => {
        describe('resolve', () => {
            beforeAll(() => {
                (global as any).fetch = jest.fn(() =>
                    Promise.resolve({
                        json: () => Promise.resolve(depts),
                    })
                );
            });

            it('should return data with "GET"', async () => {
                const json = await request('/');

                expect(json).toEqual(depts);
            });

            it('should return data with "POST"', async () => {
                const json = await request('/', 'POST', { data: 'data' });

                expect(json).toEqual(depts);
            });
        });
        describe('reject', () => {
            const error = { message: 'Some error is thrown' };

            beforeAll(() => {
                (global as any).fetch = jest.fn(() => Promise.reject(error));
            });

            it('should throw error', async () => {
                try {
                    await request('/');
                } catch (e) {
                    expect(e.message).toEqual(error.message);
                }
            });
        });
    });
});
