# JwtLogin200Response Class Documentation 
The `JwtLogin200Response` class represents a successful response from the JWT-based login, providing an authentication token.
## Class Definition 


```javascript
class JwtLogin200Response {
    constructor();
    static initialize(obj);
    static constructFromObject(data, obj);
    static validateJSON(data);
}
```

## Properties 
| Property | Type | Description | 
| --- | --- | --- | 
| token | String | JWT token for authentication. | 


---


### Constructor 
`constructor()`Creates a new instance of `JwtLogin200Response`.

```javascript
const response = new JwtLogin200Response();
```


---


### Static Methods 
`initialize(obj)`Initializes the fields of the `JwtLogin200Response` object.
**Note** : This method is for internal use and is typically called by constructors in subclasses.
##### Parameters: 
 
- `obj` (Object): The instance to initialize.


---

`constructFromObject(data, obj)`Creates a `JwtLogin200Response` instance from a plain JavaScript object. Copies relevant properties from the provided data.
##### Parameters: 
 
- `data` (Object): The plain JavaScript object containing properties of interest.
 
- `obj` (JwtLogin200Response, optional): An optional instance to populate. If not provided, a new instance is created.

##### Returns: 
 
- `JwtLogin200Response`: The populated instance.

##### Example: 


```javascript
const responseData = { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." };
const response = JwtLogin200Response.constructFromObject(responseData);
console.log(response.token); // Output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```


---

`validateJSON(data)`Validates the JSON data to ensure it adheres to the `JwtLogin200Response` schema.
##### Parameters: 
 
- `data` (Object): The plain JavaScript object to validate.

##### Returns: 
 
- `boolean`: Returns `true` if the JSON data is valid.

##### Throws: 
 
- `Error`: If the `token` field is not a string.

##### Example: 


```javascript
try {
    JwtLogin200Response.validateJSON({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." });
    console.log("Valid JSON");
} catch (error) {
    console.error("Invalid JSON:", error.message);
}
```


---


## Property Details 
`token` 
- **Type** : `String`
 
- **Description** : The JWT token used for authentication.
 
- **Example** :


```javascript
const response = new JwtLogin200Response();
response.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
console.log(response.token); // Output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```


---


## Example Usage 


```javascript
import JwtLogin200Response from './JwtLogin200Response';

const loginResponseData = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
};

// Create a new JwtLogin200Response object from data
const loginResponse = JwtLogin200Response.constructFromObject(loginResponseData);

// Access the token
console.log("JWT Token:", loginResponse.token);

// Validate JSON data
try {
    JwtLogin200Response.validateJSON(loginResponseData);
    console.log("The JSON data is valid.");
} catch (error) {
    console.error("Invalid JSON:", error.message);
}