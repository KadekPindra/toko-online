import ProductAdminView from "@/components/views/admin/Product";
import productServices from "@/services/product";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";

const AdminProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
  const getAllProducts = async () => {
    const { data } = await productServices.getAllProducts();
    setProducts(data.data);
  };
  
    getAllProducts();
  }, []);
  return (
    <div className="w-full bg-gray-50">
      <ProductAdminView products={products} />
    </div>
  );
};

export default AdminProductsPage;
