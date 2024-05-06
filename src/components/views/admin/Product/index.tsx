import AdminLayout from "@/components/layout/AdminLayout";
import Button from "@/shared-components/button/Button";
import Modal from "@/shared-components/modal/Modal";
import PanelHeader from "@/shared-components/panelHeader/PanelHeader";
import { useEffect, useState } from "react";
import Image from "next/image";
import { convertIDR } from "@/utils/currency";
import { Product } from "@/types/product.type";
import ModalAddProduct from "./ModalAddProduct";
import ModalUpdateProducts from "./ModalUpdateProduct";
import ModalDeleteProducts from "./ModalDeleteProduct";

type PropTypes = {
  products: Product[];
};

const ProductAdminView = (props: PropTypes) => {
  const { products } = props;
  const [updatedProducts, setUpdatedProducts] = useState<any>({});
  const [deletedProducts, setDeletedProducts] = useState<any>({});
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [modalAddProduct, setModalAddProduct] = useState(false);
  console.log(productsData);
  useEffect(() => {
    setProductsData(products);
  }, [products]);

  return (
    <>
      <AdminLayout>
        <div className="w-full mb-5">
          <PanelHeader title="Product Page" icon="bxs-user-account">
            <Button
              type="button"
              variant="contained"
              className="flex items-center justify-center py-1 px-5 gap-2"
              onClick={() => setModalAddProduct(true)}
            >
              <i className="bx bx-plus text-2xl" /> Add Product
            </Button>
          </PanelHeader>
        </div>
        <div className="w-full p-2 ">
          <div className="w-full h-fit bg-white p-5  shadow-lg rounded-md">
            <h1 className="text-2xl font-medium">Product List</h1>
            <hr className="my-5 border-blue-500" />
            <table className="w-full flex flex-col justify-center ">
              <thead className="flex flex-col justify-center">
                <tr className="w-full flex justify-between py-5 mb-5">
                  <th className="w-fit flex py-2 pl-2 pr-10">No</th>
                  <th className="w-full flex p-2">Gambar</th>
                  <th className="w-full flex p-2">Nama</th>
                  <th className="w-full flex p-2 -ml-20">Buah</th>
                  <th className="w-full flex p-2 -ml-20 pr-10">Deskripsi</th>
                  <th className="w-full flex p-2">Harga</th>
                  <th className="w-full flex p-2">Jenis</th>
                  <th className="w-full flex p-2">Status</th>
                  <th className="w-full flex p-2">Action</th>
                </tr>
              </thead>
              <tbody className="flex flex-col justify-center w-full">
                {productsData.map((product, index) => (
                  <tr key={product.id} className="w-full flex justify-between">
                    <td className="border-t pl-2 pr-10 py-2 border-gray-100 w-fit flex items-center justify-start">
                      {index + 1}
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full flex items-center justify-start">
                      <Image
                        alt="Foto rujak"
                        src={product.image}
                        width={100}
                        height={100}
                      />
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full flex items-center justify-start">
                      {product.name}
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full -ml-20 flex items-center justify-start">
                      {product.variety}
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full -ml-20 pr-10 flex items-center justify-start">
                      {product.desc}
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full flex items-center justify-start">
                      {convertIDR(product.price)}
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full flex items-center justify-start">
                      {product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                    </td>
                    <td className="border-t px-2 py-2 border-gray-100 w-full flex items-center justify-start">
                      {product.status ? (
                        <Button type="button" variant="text" color="success">
                          Ready
                        </Button>
                      ) : (
                        <Button type="button" variant="text" color="danger">
                          Not Ready
                        </Button>
                      )}
                    </td>
                    <td className="border-t px-2 py-2 gap-4 border-gray-100 w-full flex items-center justify-start">
                      <Button
                        type="button"
                        variant="text"
                        onClick={() => setUpdatedProducts(product)}
                      >
                        <i className="bx bxs-pencil p-2 text-2xl transition-colors duration-100 hover:text-blue-400"></i>
                      </Button>
                      <Button
                        type="button"
                        variant="text"
                        onClick={() => setDeletedProducts(product)}
                      >
                        <i className="bx bx-trash-alt text-2xl transition-colors duration-100 hover:text-red-500"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
      
      {modalAddProduct && (
        <ModalAddProduct
          setModalAddProduct={setModalAddProduct}
          setProductsData={setProductsData}
        />
      )}
      {Object.keys(updatedProducts).length && (
        <ModalUpdateProducts
          updatedProducts={updatedProducts}
          setUpdatedProducts={setUpdatedProducts}
          setProductsData={setProductsData}
        />
      )}
      {Object.keys(deletedProducts).length && (
        <ModalDeleteProducts
          deletedProducts={deletedProducts}
          setDeletedProducts={setDeletedProducts}
          setProductsData={setProductsData}
        />
      )}
      
    </>
  );
};

export default ProductAdminView;
