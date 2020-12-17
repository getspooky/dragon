# Xanny

<p align="left">

![GitHub issues](https://img.shields.io/github/issues/xanny-projects/xanny)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/xanny-projects/xanny)

</p>

<img align="right" src="https://avatars2.githubusercontent.com/u/75166135?s=150&v=4" height="150px">

Xanny is a _simple_, _fast_ and _low_ **HTTP** router and **URL** marcher for building **Deno** servers. If you need performance and good productivity, you will love it.

### Features

- Developer friendly, very expressive and help the developer in their daily use, without sacrificing performance and security.
- Lightweight and modular design allows for a flexible framework.
- Focus on high performance.
- Middleware support, incoming HTTP request can be handled by a chain of middlewares and the final action.
- Excellent and fluent documentation.

## Getting Started

Let's start registering a couple of URL paths and handlers:

```ts
const app = new Application();

const r = app.NewRoute({ maxRoutes:2 });

r.WithMethods(RequestMethod.GET)
    .Path("/hello")
    .HandleFunc(function (Request: HttpRequest, ResponseWriter: HttpResponse) {
      ResponseWriter.WithBody("Hello Xanny").Return();
    })
    .Path("/demo")
    .HandleFunc(function (Request: HttpRequest, ResponseWriter: HttpResponse) {
      ResponseWriter.WithBody("Hello Xanny Demo").Return();
    });

app.ListenAndServe({ port: 8080 });
```

Here we register two routes mapping URL path to handler. if an incoming request URL matches one of the paths, the corresponding handler is called passingWe believe development must be an enjoyable and creative experience to be truly fulfilling
(`HttpRequest`, `HttpResponse`) as parameters.

## Documentation

Get started with Xanny, learn the fundamentals and explore advanced topics.

### Table of content

* [Installation](#install)
* [Configuration](#configuration)
* [Routing](#routing)
* [Requests](#requests)
* [Responses](#responses)
* [Cookies](#cookies)
* [Middlewares](#middlewares)
* [Full Example](#full-example)

### Installation

Assuming you’ve already installed **Deno**, create a directory to hold your application, and make that your working directory.

```sh
$ mkdir xanny-app
$ cd xanny-app
```

### Routing

Routing is made from the word route. It is used to determine the specific behavior of an application. It specifies how an application responds to a client request to a particular route, URI or path and a specific HTTP request method (`GET`, `POST`, etc.). It can handle different types of HTTP requests.

#### 1- Basic Routing

Xanny provides a very simple and expressive method of defining routes and behavior without complicated routing configuration files:

```ts
const r = app.NewRoute();
  r.WithMethods(RequestMethod.GET)
  .Path("/hello")
  .HandleFunc(function (Request: HttpRequest, ResponseWriter: HttpResponse) {
    ResponseWriter.WithBody("Hello Xanny").Return();
  });
```

#### 2- Available Router Methods

The router allows you to register routes that respond to any HTTP verb:

```ts
const r = app.NewRoute();
  r.WithMethods(RequestMethod.GET);
  r.WithMethods(RequestMethod.POST);
  r.WithMethods(RequestMethod.PUT);
  r.WithMethods(RequestMethod.DELETE);
  r.WithMethods(RequestMethod.PATCH);
```

Sometimes you may need to register a route that responds to multiple HTTP verbs.

```ts
const r = app.NewRoute();
  r.WithMethods(RequestMethod.GET, RequestMethod.POST);
```

#### 3- Route Parameters

Sometimes you will need to capture segments of the URI within your route.
For example, you may need to capture a user's ID from the URL. You may do so by defining route parameters:

```ts
const r = app.NewRoute();
  r.WithMethods(RequestMethod.GET)
   .Path(/user\/(?<id>[0-9]{1,})/u)
   .HandleFunc(async function (Request: HttpRequest, ResponseWriter: HttpResponse): Promise<any> {
       const userID = await Request.GetParams();
       ResponseWriter.WithBody(`User with id ${userID}`).Return();
    });
```

You may define as many route parameters as required by your route.

> 🚨 Xanny uses regex named group in order to match parameters.

#### 4- Named Routes

Named routes allow to get handler. You may specify a `WithName` for a route by chaining the name method onto the route definition:

```ts
const r = app.NewRoute();
  r.WithMethods(RequestMethod.GET)
   .Path("/user/profile")
   .WithName("profile")
   .HandleFunc(async function (Request: HttpRequest, ResponseWriter: HttpResponse): Promise<any> {
       //
    });
```

## Benchmarks

**Machine**: 7,6 GiB, Intel® Core™ i5-3210M CPU @ 2.50GHz × 4 , Intel® Ivybridge Mobile, 320,1 GB.

**method**: `autocannon -c 100 -d 40 -p 10 localhost:8080` , taking the second average

| Framework     | Version       | Router? | Results                                    |
| ------------- |:-------------:| :------:| ------------------------------------------:|
| Express       | 4.17.1        | ✓       | 166k requests in 40.08s, 39.5 MB read      |
| Fastify       | 3.9.1         | ✓       | 1081k requests in 40.07s ,189 MB read      |
| Oak           | 4.0.0         | ✓       | 243k requests in 40.12s, 27 MB read        |
| **Xanny**     | **1.0.0**     | **✓**   | **416k requests in 40.21s, 37.1 MB read**  |

Benchmarks taken using [https://github.com/fastify/benchmarks](https://github.com/fastify/benchmarks). This is a synthetic, `hello world` benchmark that aims to evaluate the framework overhead. The overhead that each framework has on your application depends on your application, you should **always** benchmark if performance matters to you.



## Contributing

We appreciate your help 👋!

We encourage you to contribute to Xanny! Please check out the  [guidelines](/CONTRIBUTING) about how to proceed.

## Sponsors

We would like to extend our thanks to the following sponsors for funding xanny development. If you are interested in becoming a sponsor, please visit the Xanny [Open collective page]().

## Code of Conduct

In order to ensure that the Xanny community is welcoming to all, please review and abide by the [Code of Conduct](/CODE_OF_CONDUCT).

## Security Issues

If you discover a security vulnerability in Xanny, please see [Security Policies and Procedures](/SECURITY).

## Changelog

Detailed changes for each release are documented in the [release notes](/CHANGELOG).

## People

- The original author of Xanny is [Yasser A.Idrissi](https://github.com/getspooky).

- [List of all contributors](https://github.com/xanny-projects/xanny/graphs/contributors)

## License

The Xanny framework is open-sourced software licensed under the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).


