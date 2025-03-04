// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Eligibilities, EligibilityCreateParams, EligibilityCreateResponse } from './resources/eligibilities';

export interface ClientOptions {
  /**
   * OAuth2 access token for authentication
   */
  accessToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['ONEDERFUL_DENTISTRY_API_TEST_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Onederful Dentistry API Test API.
 */
export class OnederfulDentistryAPITest extends Core.APIClient {
  accessToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Onederful Dentistry API Test API.
   *
   * @param {string | undefined} [opts.accessToken=process.env['OAUTH2_ACCESS_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['ONEDERFUL_DENTISTRY_API_TEST_BASE_URL'] ?? http://{{baseurl}}] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('ONEDERFUL_DENTISTRY_API_TEST_BASE_URL'),
    accessToken = Core.readEnv('OAUTH2_ACCESS_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (accessToken === undefined) {
      throw new Errors.OnederfulDentistryAPITestError(
        "The OAUTH2_ACCESS_TOKEN environment variable is missing or empty; either provide it, or instantiate the OnederfulDentistryAPITest client with an accessToken option, like new OnederfulDentistryAPITest({ accessToken: 'My Access Token' }).",
      );
    }

    const options: ClientOptions = {
      accessToken,
      ...opts,
      baseURL: baseURL || `http://{{baseurl}}`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.accessToken = accessToken;
  }

  eligibilities: API.Eligibilities = new API.Eligibilities(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static OnederfulDentistryAPITest = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static OnederfulDentistryAPITestError = Errors.OnederfulDentistryAPITestError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

OnederfulDentistryAPITest.Eligibilities = Eligibilities;
export declare namespace OnederfulDentistryAPITest {
  export type RequestOptions = Core.RequestOptions;

  export {
    Eligibilities as Eligibilities,
    type EligibilityCreateResponse as EligibilityCreateResponse,
    type EligibilityCreateParams as EligibilityCreateParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  OnederfulDentistryAPITestError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default OnederfulDentistryAPITest;
