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