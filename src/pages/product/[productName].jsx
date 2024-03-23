import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productName } = router.query;

  // Jika productName kosong atau tidak didefinisikan, tampilkan pesan sesuai
  const productDetail = productName ? `Detail product: ${productName}` : "Product not found";

  return (
    <div>
      <h1>{productDetail}</h1>
    </div>
  );
}
