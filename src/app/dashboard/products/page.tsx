import { ProductsCard } from "@/products";
import { products } from "@/products/data/products";


export const metadata = {
 title: 'Products page',
 description: 'Products page',
};

export default function ProductsPage() {
  return (
    <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {
            products.map((product)=>(
                <ProductsCard key={product.id} {...product}/>
            ))
        }
    </div>
  );
}