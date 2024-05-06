import Button from "@/shared-components/button/Button";
import SearchInput from "@/shared-components/searchInput/SearchInput";
import { Product } from "@/types/product.type";
import { convertIDR } from "@/utils/currency";
import Image from "next/image";
import Card from "./Card";

type PropTypes = {
  products: Product[];
};
const ProductView = (props: PropTypes) => {
  const { products } = props;
  return (
    <>
      <div className="w-full h-full flex justify-between px-40 pt-20 ">
        <div className="w-full h-full p-10 flex ">
          <div className="w-1/4 flex flex-col ">
            <h1 className="text-3xl">All Products ({products.length})</h1>
            <div className="w-full flex h-[1px] mt-2 text-transparent bg-blue-600">
              -
            </div>
            <div className="py-5">
              <h4 className="font-semibold text-lg">Jenis Makanan</h4>
              <div className="flex items-center gap-2 text-base font-medium">
                <input type="checkbox" id="rujak" />
                <label htmlFor="rujak">Rujak</label>
              </div>
              <div className="flex items-center gap-2 text-base font-medium">
                <input type="checkbox" id="es-buah" />
                <label htmlFor="es-buah">Es Buah</label>
              </div>
              <div className="flex items-center gap-2 text-base font-medium">
                <input type="checkbox" id="jus-buah" />
                <label htmlFor="jus-buah">Jus Buah</label>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="w-full flex justify-end px-4">
              <div className="w-1/3">
                <SearchInput placeholder="Search Products" />
              </div>
            </div>
            <div className=" w-full grid grid-cols-3 gap-7 p-4">
              {products.map((product) => (
                <Card product={product} key={product.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
