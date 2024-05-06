import { uploadFile } from "@/lib/firebase/service";
import productServices from "@/services/product";
import Button from "@/shared-components/button/Button";
import Input from "@/shared-components/input/Input";
import Modal from "@/shared-components/modal/Modal";
import Select from "@/shared-components/select/Select";
import UploadImage from "@/shared-components/uploadImage/UploadImage";
import { Product } from "@/types/product.type";
import { useSession } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type Propstypes = {
  setModalAddProduct: Dispatch<SetStateAction<boolean>>;
  setProductsData: Dispatch<SetStateAction<Product[]>>;
};

const ModalAddProduct = (props: Propstypes) => {
  const { setModalAddProduct, setProductsData } = props;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const session: any = useSession();

  const uploadImage = (id: string, form: any) => {
    const file = form.image.files[0];
    const newName = "main." + file.name.split(".")[1];
    if (file) {
      uploadFile(
        id,
        file,
        newName,
        "products",
        async (status: boolean, newImageURL: string) => {
          if (status) {
            const data = {
              image: newImageURL,
            };
            const result = await productServices.updateProduct(
              id,
              data,
              session.data?.accessToken
            );
            if (result.status === 200) {
                setIsLoading(false)
                setUploadedImage(null);
                form.reset();
                setModalAddProduct(false);
                const {data} = await productServices.getAllProducts();
                setProductsData(data.data);
            } else {
              setIsLoading(false);
            }
          } else {
            setIsLoading(false);
          }
        }
      );
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      image: '',
    };

    const result = await productServices.addProduct(data, session.data?.accessToken);
    console.log(result);
    // if (result.status === 200) {
    //   uploadImage(result.data.data.id, form);
    // }
  };

  return (
    <Modal onClose={() => setModalAddProduct(false)}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full items-center mb-5 justify-center">
          <h1 className="text-2xl font-semibold">Add Product</h1>
          <hr className="my-5 w-full border-blue-500" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 font-medium"
        >
          <Input
            className="opacity-75"
            label="Nama Produk"
            type="text"
            name="name"
            placeholder="Enter product name"
          />
          <Input
            className="opacity-75"
            label="Variant Bahan"
            type="text"
            name="variety"
            placeholder="Enter product variety"
          />
          <Input
            className="opacity-75"
            label="Deskripsi Produk"
            type="text"
            name="desc"
            placeholder="Enter description"
          />
          <Input
            className="opacity-75"
            label="Harga Produk"
            type="number"
            name="price"
            placeholder="Enter price"
          />
          <Select
            label="Jenis Menu"
            name="category"
            options={[
              { label: "Rujak", value: "rujak" },
              { label: "Es Buah", value: "es-buah" },
              { label: "Jus Buah", value: "jus-buah" },
            ]}
          />
          <Select
            label="Status"
            name="status"
            options={[
              { label: "Ready", value: "true" },
              { label: "Not Ready", value: "false" },
            ]}
          />
          <label htmlFor="image">Foto Produk</label>
          <UploadImage
            name="image"
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
          />
          <div className="w-full flex items-center justify-end mt-5 gap-3">
            <Button
              type="button"
              className="w-full px-10 py-2"
              variant="outlined"
              onClick={() => setModalAddProduct(false)}
            >
              {isLoading ? "Loading..." : "Cancel"}
            </Button>
            <Button
              className="w-full px-10 py-2 border-2 border-blue-500"
              type="submit"
            >
              {isLoading ? "Loading..." : "Add"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAddProduct;
