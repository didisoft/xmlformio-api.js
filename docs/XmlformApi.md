# XmlFormIoApi.XmlformApi

All URIs are relative to *https://api.xmlform.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**formToXml**](XmlformApi.md#formToXml) | **POST** /xml/v1/FormToXmlV1/ | Converts provided xmlform.io form data into XML document
[**jwtLogin**](XmlformApi.md#jwtLogin) | **POST** /jwt/ | JWT Token endpoint
[**xmlToForm**](XmlformApi.md#xmlToForm) | **POST** /xml/v1/XmlToFormV1/ | Converts provided XML document into xmlform.io form data



## formToXml

> String formToXml(body)

Converts provided xmlform.io form data into XML document

Converts provided xmlform.io form data into XML document

### Example

```javascript
import XmlFormIoApi from 'xml_form_io_api';
let defaultClient = XmlFormIoApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new XmlFormIoApi.XmlformApi();
let body = "body_example"; // String | form data submitted from xmlform.io web form
apiInstance.formToXml(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| form data submitted from xmlform.io web form | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml


## jwtLogin

> JwtLogin200Response jwtLogin(jwtLoginRequest)

JWT Token endpoint

Authenticates and returns a JWT token

### Example

```javascript
import XmlFormIoApi from 'xml_form_io_api';

let apiInstance = new XmlFormIoApi.XmlformApi();
let jwtLoginRequest = new XmlFormIoApi.JwtLoginRequest(); // JwtLoginRequest | 
apiInstance.jwtLogin(jwtLoginRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwtLoginRequest** | [**JwtLoginRequest**](JwtLoginRequest.md)|  | 

### Return type

[**JwtLogin200Response**](JwtLogin200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## xmlToForm

> String xmlToForm(body)

Converts provided XML document into xmlform.io form data

Converts XML document into form data, ready for editing in an xmlform.io web form. #Example code Example code for various languages can be found at [Xml to Form examples](https://xmlform.io/docs/xml-to-form) 

### Example

```javascript
import XmlFormIoApi from 'xml_form_io_api';
let defaultClient = XmlFormIoApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new XmlFormIoApi.XmlformApi();
let body = "body_example"; // String | 
apiInstance.xmlToForm(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | 

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/xml

