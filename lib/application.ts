/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Request methods to indicate the desired action to be performed.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods}
 * */
export enum RequestMethod {
  GET = 0,
  POST,
  PUT,
  DELETE,
  PATCH,
  ALL,
  OPTIONS,
  HEAD,
}

export interface ApplicationOptions {
  /** An initial set of key for signing cookies and sessions produced by the application. */
  key?: { cookie: string; session: string;}
  /** If set to `true`, proxy headers will be trusted when processing requests.
   * This defaults to `false`. */
  proxy?: boolean;
  /** Return array of subdomains in the domain name of the request.
   * This defaults to `2`. */
  subdomainOffset?: string[] | 2;
  /** Return header for identifying the originating IP address of a client connecting to a web server
   * through an HTTP proxy or a load balancer */
  proxyIpHeader?: string | 'X-Forwarded-For';
}
