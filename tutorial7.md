# Tutorial 7 - Nested Dynamic Routes

Scenario 4

- /products
    - should show 3 products
- /products/1
- /products/2
- /products/3 

Use the `[]` to create dynamic pages

routing-demo/app
├── about
├── blog
│   ├── first
│   └── second
├── products
│   └── [productId]
└── profile

```
// use async function to resolve the params promise
// and get the productId from it
export default async function ProductDetails({
    params,
}: {
    // type of params is a Promise that resolves to an object
    // as Key value pairs of all dynamic segments in the route
    params: Promise<{productId: string}>;
}) {
    const productId= (await params).productId;
    return <h1>Details about Product {productId}</h1>;
}

```
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It acts as a proxy for a value that may not be immediately available but will be resolved (fulfilled) or rejected in the future. Promises provide a way to handle asynchronous actions more cleanly than traditional callbacks by allowing chaining of operations and centralized error handling.

Promises are used because JavaScript is single-threaded and cannot wait for asynchronous operations (like fetching data or reading files) without blocking other code execution. By using a Promise, the code can continue running while waiting for the asynchronous operation to complete. Once completed, the Promise either resolves with a value or rejects with an error, and appropriate handlers can process these outcomes.

- The params is a Promise that will eventually resolve to an object containing the productId.
- Using await pauses the function execution until the Promise resolves and then extracts productId.
- This pattern lets you write asynchronous code in a synchronous style, making it easier to read and maintain.

Yes, generally when you use an async function in JavaScript, the function automatically returns a Promise. So, an async function is essentially a function that always returns a Promise, whether you explicitly return one or just return a value.