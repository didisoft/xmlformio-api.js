# xmlform.io API 

xmlform.io JavaScript API - JavaScript client for [http://xmlform.io](http://xmlform.io) API.
This SDK is for working with web forms backed by XML data


For more information, please visit [http://xmlform.io/docs](http://xmlform.io/docs)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To  install run:

```shell
npm install @xmlformio/api --save
```


### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var XmlFormIoApi = require('@xmlformio/api');

var defaultClient = XmlFormIoApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new XmlFormIoApi.XmlformApi()
var body = "body_example"; // {String} form data submitted from xmlform.io web form
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.formToXml(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.xmlform.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*XmlFormIoApi.XmlformApi* | [**formToXml**](docs/XmlformApi.md#formToXml) | **POST** /xml/v1/FormToXmlV1/ | Converts provided xmlform.io form data into XML document
*XmlFormIoApi.XmlformApi* | [**jwtLogin**](docs/XmlformApi.md#jwtLogin) | **POST** /jwt/ | JWT Token endpoint
*XmlFormIoApi.XmlformApi* | [**xmlToForm**](docs/XmlformApi.md#xmlToForm) | **POST** /xml/v1/XmlToFormV1/ | Converts provided XML document into xmlform.io form data


## Documentation for Models

 - [XmlFormIoApi.JwtLogin200Response](docs/JwtLogin200Response.md)
 - [XmlFormIoApi.JwtLoginRequest](docs/JwtLoginRequest.md)


## Documentation for Authorization


Authentication schemes defined for the API:


### bearerAuth

- **Type**: Bearer authentication (JWT)

