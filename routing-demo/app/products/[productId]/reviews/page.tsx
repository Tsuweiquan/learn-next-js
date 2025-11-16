export default async function ReviewPage({
  params,
}: {
    params: Promise<{ productId: string}>;
}) {
    const { productId } = await params;
    return <h1> List of all Reviews for Product {productId}</h1>;
}