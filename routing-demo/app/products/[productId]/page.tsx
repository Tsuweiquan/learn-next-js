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
