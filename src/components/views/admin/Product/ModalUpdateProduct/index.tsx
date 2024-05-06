import productServices from "@/services/product";
import Button from "@/shared-components/button/Button";
import Input from "@/shared-components/input/Input";
import Modal from "@/shared-components/modal/Modal";
import Select from "@/shared-components/select/Select";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";

const ModalUpdateProducts = (props: any) => {
  const { updatedProducts, setUpdatedProducts, setProductsData } = props;
  const session: any = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProducts = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;
    const data = {
      name: form.name.value,
      desc: form.desc.value,
      price: form.price.value,
      variety: form.variety.value,
      category: form.category.value,
      status: form.status.value,
      image: "",
    };

    const result = await productServices.updateProduct(
      updatedProducts.id,
      data,
      session.data?.accessToken
    );

    if (result.status === 200) {
      setIsLoading(false);
      setUpdatedProducts({});
      const { data } = await productServices.getAllProducts();
      setProductsData(data.data);
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal onClose={() => setUpdatedProducts({})}>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full items-center mb-5 justify-center">
            <h1 className="text-2xl font-semibold">Update Products</h1>
            <hr className="my-5 w-full border-blue-500" />
          </div>
          <form
            onSubmit={handleUpdateProducts}
            className="flex flex-col gap-5 font-medium"
          >
            <Input
              className="opacity-75"
              label="Nama Produk"
              type="text"
              name="name"
              placeholder="Enter product name"
              defaultValue={updatedProducts.name}
            />
            <Input
              className="opacity-75"
              label="Variant Bahan"
              type="text"
              name="variety"
              placeholder="Enter product variety"
              defaultValue={updatedProducts.variety}
            />
            <Input
              className="opacity-75"
              label="Deskripsi Produk"
              type="text"
              name="desc"
              placeholder="Enter description"
              defaultValue={updatedProducts.desc}
            />
            <Input
              className="opacity-75"
              label="Harga Produk"
              type="number"
              name="price"
              placeholder="Enter price"
              defaultValue={updatedProducts.price}
            />
            <Select
              label="Jenis Menu"
              name="category"
              defaultValue={updatedProducts.category}
              options={[
                { label: "Rujak", value: "rujak" },
                { label: "Es Buah", value: "es-buah" },
                { label: "Jus Buah", value: "jus-buah" },
              ]}
            />
            <Select
              label="Status"
              name="status"
              defaultValue={updatedProducts.status}
              options={[
                { label: "Ready", value: "true" },
                { label: "Not Ready", value: "false" },
              ]}
            />
            <div className="w-full flex items-center justify-end mt-5 gap-3">
              <Button
                type="button"
                className="w-full px-10 py-2"
                onClick={() => setUpdatedProducts({})}
                variant="outlined"
              >
                {isLoading ? "Loading..." : "Cancel"}
              </Button>
              <Button
                className="w-full px-10 py-2 border-2 border-blue-500"
                type="submit"
              >
                {isLoading ? "Loading..." : "Update"}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalUpdateProducts;
