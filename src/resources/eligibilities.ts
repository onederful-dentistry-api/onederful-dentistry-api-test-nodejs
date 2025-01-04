// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Eligibilities extends APIResource {
  /**
   * Check eligibility
   */
  create(params: EligibilityCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { body, Accept } = params;
    return this._client.post('/eligibility', {
      body: body,
      ...options,
      headers: { ...(Accept != null ? { Accept: Accept } : undefined), ...options?.headers },
    });
  }
}

export type EligibilityCreateResponse = unknown;

export interface EligibilityCreateParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param:
   */
  Accept?: string;
}

export declare namespace Eligibilities {
  export {
    type EligibilityCreateResponse as EligibilityCreateResponse,
    type EligibilityCreateParams as EligibilityCreateParams,
  };
}
