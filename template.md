### {{Param}}

#### Get all {{param}}s
| `GET`  /{{param}}| Return all {{param}} |
| :---             | :---- |
| Code             | 200 |
| Parameters |     |
| Media type | application/json |

Response body:
```javascript
	[{
	}]
```
**[⬆ back to top](#table-of-contents)**

#### Get {{param}} by id
| `GET`  /{{param}}/{{{param}}Id}     | Return {{param}} by id|
| :---             | :---- |
| Code             | 200 |
| Parameters |    |
| Media type | application/json |

Response body:
```javascript
	{
	}
```

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: '{{Param}} not found'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Create new {{param}}
| `POST`  /{{param}}/{{{param}}Id}     | Return newly created {{param}}|
| :---             | :---- |
| Code             | 201 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
	{
	}

```

Response body:
```javascript
	{
	}
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Update {{param}}

| `PATCH` /{{param}}/{{{param}}Id}  | Return updated {{param}} |
| :---             | :---- |
| Code             | 201 |
| Parameters |    |
| Media type | application/json |

Request body:
```javascript
	{
	}

```

Response body:
```javascript
	{
	}
```

| Code             | 400 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: 'reason'
  }
```
| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: '{{Param}} not found'
  }
```
**[⬆ back to top](#table-of-contents)**

#### Delete {{param}}
| `DELETE`  /{{param}}/{{{param}}Id}     | Return no data |
| :---             | :---- |
| Code             | 204 |
| Media type |  |
Response body: no content

| Code             | 404 |
| :---             | :---- |
| Media type | application/json |
Response body:
```javascript
  { 
    message: '{{Param}} not found'
  }
```
---
