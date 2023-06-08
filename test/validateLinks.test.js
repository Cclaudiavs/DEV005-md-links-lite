/* global describe, it, expect */
/* eslint no-undef: "error" */
/* eslint-env node */
const axios = require('axios');
const { validateLinks } = require('../validateLinks');

jest.mock('axios');

describe('validateLinks', () => {
    it('should return the validated links with their status and ok properties', () => {
        const links = [
            { href: 'http://example.com' },
            { href: 'http://google.com' },
            { href: 'http://invalid-url.com' },
        ];

        axios.head
            .mockResolvedValueOnce({ status: 200 })
            .mockRejectedValueOnce({})
            .mockResolvedValueOnce({ status: 200 });

        return validateLinks(links).then((result) => {
            expect(result).toEqual([
                { href: 'http://example.com', status: 200, ok: true },
                { href: 'http://google.com', status: 404, ok: false },
                { href: 'http://invalid-url.com', status: 200, ok: true },
            ]);
            expect(axios.head).toHaveBeenCalledTimes(3);
        });
    });
});
