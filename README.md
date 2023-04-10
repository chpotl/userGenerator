# REST API

The REST API to the app is described below.

## Get all users

### Request

`GET /`

    curl -i -H 'Accept: application/json' http://localhost:3000/user

### Response

   HTTP/1.1 200 OK  
   X-Powered-By: Express  
   Content-Type: application/json; charset=utf-8  
   Content-Length: 2256  
   ETag: W/"8d0-AYsAmnSR/M3Xd417MG3uNOYnI1I"  
   Date: Mon, 10 Apr 2023 21:23:15 GMT  
   Connection: keep-alive  
   Keep-Alive: timeout=5  

    []

## Create new user

### Request

`POST /`

    curl -i -H 'Accept: application/json' -d '' http://localhost:3000/user

### Response

HTTP/1.1 200 OK  
X-Powered-By: Express  
Content-Type: application/json; charset=utf-8  
Content-Length: 1107  
ETag: W/"453-uc9/ZaRzZ192BK8kSO2wV2mzQu0"  
Date: Mon, 10 Apr 2023 21:32:18 GMT  
Connection: keep-alive  
Keep-Alive: timeout=5  

    {"data":{"gender":"female","name":{"title":"Ms","first":"Terra","last":"Alexander"},"location":{"street":{"number":1992,"name":"First Street"},"city":"Altoona","state":"North Carolina","country":"United States","postcode":44059,"coordinates":{"latitude":"87.3835","longitude":"36.1729"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"terra.alexander@example.com","login":{"uuid":"e0d7340a-6e1b-4d19-9561-e4cb13a8f273","username":"bigwolf327","password":"gandalf1","salt":"6hS1gMMv","md5":"ea70d94422ff3087cfc856ba27ac120c","sha1":"d1504cfaba42f50e7434ca165a8d1dc856aade20","sha256":"e4eadfd6236c012655b1dae4d8b2ad79af56f86b1fc427c01d8a2637c76d869a"},"dob":{"date":"1989-07-23T13:38:47.812Z","age":33},"registered":{"date":"2017-02-01T09:46:25.148Z","age":6},"phone":"(365) 914-2822","cell":"(391) 556-5649","id":{"name":"SSN","value":"089-52-1313"},"picture":{"large":"https://randomuser.me/api/portraits/women/9.jpg","medium":"https://randomuser.me/api/portraits/med/women/9.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/9.jpg"},"nat":"US"}}
