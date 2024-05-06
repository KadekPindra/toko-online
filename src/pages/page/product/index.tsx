import ProductView from "@/components/views/products";
import productServices from "@/services/product";
import { Product } from "@/types/product.type";
import Head from "next/head";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getAllProducts = async () => {
    const { data } = await productServices.getAllProducts();
    setProducts(data.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Head>
        <title>Product Page</title>
      </Head>
      <ProductView products={products} />
    </>
  );
};

export default ProductPage;
