
## [express.json vs bodyParser.json](https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json/47232318#47232318)

Earlier versions of Express used to have a lot of middleware bundled with it. bodyParser was one of the middleware that came with it. When Express 4.0 was released they decided to remove the bundled middleware from Express and make them separate packages instead. The syntax then changed from `app.use(express.json())` to `app.use(bodyParser.json())` after installing the bodyParser module.

bodyParser was added back to Express in release 4.16.0, because people wanted it bundled with Express like before. That means you don't have to use `bodyParser.json()` anymore if you are on the latest release. You can use `express.json()` instead.

## [curl](https://www.baeldung.com/curl-rest)

```
curl -v http://localhost:8082/spring-rest/foos/9 // GET
``` 

## [enums](https://mongoosejs.com/docs/schematypes.html#string-validators)
```
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
```

## Finding all products and attaching product stats 
All the list of products and then taking id of each one and finding their product stats, then returing the object of combination of product along with their stats.  

```
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
```


## Get Transaction 
```js
const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10
}

sexyModel.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    }); 

?page=0&limit=25 // this would be added onto your URL 
http:localhost:5000?page=0&limit=25
```
