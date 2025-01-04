// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OnederfulDentistryAPITest from 'onederful-dentistry-api-test';
import { Response } from 'node-fetch';

const client = new OnederfulDentistryAPITest({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eligibilities', () => {
  test('create: only required params', async () => {
    const responsePromise = client.eligibilities.create({
      body: {
        subscriber: { first_name: 'TEST', last_name: 'PERSON', dob: '01/01/2011', member_id: '1234567890' },
        provider: { npi: '1234567890' },
        payer: { id: 'PRINCIPAL' },
        version: 'v2',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.eligibilities.create({
      body: {
        subscriber: { first_name: 'TEST', last_name: 'PERSON', dob: '01/01/2011', member_id: '1234567890' },
        provider: { npi: '1234567890' },
        payer: { id: 'PRINCIPAL' },
        version: 'v2',
      },
      Accept: 'application/json',
    });
  });
});
