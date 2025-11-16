# Tutorial 8

Nested dynamic routes!!!

- /products/1
- /products/1/reviews/1

- Same principle for creating nested folders

```
export default async function ProductReview({
        params,
    }: {
        params: Promise<{ productId: string; reviewId: string }>;
    }
) {
    const { productId, reviewId} = await params;
    return <h1> Review {reviewId} for Product {productId}</h1>;
}
```

There is another way to do nested dynamic page