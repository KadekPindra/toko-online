import Button from "@/shared-components/button/Button";
import { Product } from "@/types/product.type";
import { convertIDR } from "@/utils/currency";
import Image from "next/image";

type PropTypes = {
  product: Product;
  key: string;
};
const Card = (props: PropTypes) => {
  const { product, key } = props;
  return (
    <div className="w-full h-[500px] pb-12 shadow-lg" key={product.id}>
      <div className="flex max-h-[210px]">
        <Image
          src={product.image}
          alt="product"
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col w-full p-2">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <p className="text-sm opacity-80">Bahan : {product.variety}</p>
        <p className="my-3 text-sm min-h-20">{product.desc}</p>
        <p className="mt-3 font-semibold tracking-wide text-xl">
          {convertIDR(product.price)}
        </p>
        <div className="w-full h-full flex mt-2">
          <Button
            type="button"
            variant="contained"
            color="default"
            className="py-2 px-10"
          >
            Beli Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
