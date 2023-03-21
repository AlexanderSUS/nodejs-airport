#### Path

| `GET`  /path     | get all |
| :---             | :---- |
| Code             | 200 |
| Parameters |  PARAMS!!!!!!!!   |
| Media type | application/json |

Response body:
```javascript
	[{
	}]
```

| `GET`  /path/{pathId}     | get by id|
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
    message: '???????? not found'
  }
```

| `POST`  /path/{pathIdId}     | create ???|
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

| `PATCH`  /path/{pathIdId}     | update ??? |
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
    message: '???????? not found'
  }
```

| `DELETE`  /????s/{????Id}     | Update ???? |
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
    message: '????? not found'
  }
```
---
