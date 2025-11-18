# Tutorial 10 - Change the 404 error page

1. Create a file in /app folder
- app/not-found.tsx

- Simple and easy

Can also trigger it programatically via the notfound functions

Image the products/1/reviews/1
if reviews will never exceed 1000

```
import { notFound } from "next/navigation";
if (parseInt(reviewId) > 1000) {
        notFound();
    }
```
Put the `not-found.tsx` file in the same folder

NotFound component does not accept props, to generate dynamically, need to use the `usePathname`

```
"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1>404 - Review {reviewId} Not Found for product {productId} </h1>
      <p>The Review page you are looking for does not exist.</p>
    </div>
  );
}
// hooks can only be used in client components
```