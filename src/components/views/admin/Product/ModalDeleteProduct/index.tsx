import productServices from "@/services/product";
import userServices from "@/services/user";
import Button from "@/shared-components/button/Button";
import Modal from "@/shared-components/modal/Modal";
import { Product } from "@/types/product.type";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";

type Propstypes = {
  setProductsData: Dispatch<SetStateAction<Product[]>>;
  deletedProducts: Product;
  setDeletedProducts: Dispatch<SetStateAction<{}>>;
};

const ModalDeleteProducts = (props: Propstypes) => {
  const { deletedProducts, setDeletedProducts, setProductsData } = props;
  const session: any = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    const result = await productServices.deleteProducts(
      deletedProducts.id,
      session.data?.accessToken
    );
    if (result.status === 200) {
      setIsLoading(false);
      setDeletedProducts({});
      const { data } = await productServices.getAllProducts();
      setProductsData(data.data)
    } else {
        setIsLoading(true)
    }
  };

  return (
    <Modal onClose={() => setDeletedProducts({})}>
      <div className="flex flex-col w-full items-center justify-center gap-7">
        <div className="text-2xl flex ">
          <h1>Are you sure you want to delete this product?</h1>
        </div>
        <div className="flex gap-5">
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => setDeletedProducts({})}
            className="py-2 px-5 rounded-md text-xl"
          >
            {isLoading ? "Loading..." : "Cancel"}
          </Button>
          <Button
            type="button"
            variant="contained"
            color="danger"
            onClick={() => handleDelete()}
            className="py-2 px-5 rounded-md text-xl"
          >
            {isLoading ? "Loading..." : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteProducts;
