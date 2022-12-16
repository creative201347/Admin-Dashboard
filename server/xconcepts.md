
## [express.json vs bodyParser.json](https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json/47232318#47232318)

Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middleware that came with it. When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead. The syntax then changed from `app.use(express.json())` to `app.use(bodyParser.json())` after installing the bodyParser module.

bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before. That means you don't have to use `bodyParser.json()` anymore if you are on the latest release. You can use `express.json()` instead.

## [curl](https://www.baeldung.com/curl-rest)

```
curl -v http://localhost:8082/spring-rest/foos/9 // GET
``` 