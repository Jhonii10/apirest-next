import { WidgetItem } from "@/components";
import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shopping";
import { cookies } from "next/headers";



export const metadata = {
 title: 'Cart',
 description: 'Cart',
};

interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProducts = (cart:{[id:string]:number}) => {
   const productsInCart:ProductInCart[] = [];
   for (const id of Object.keys(cart)){
        const product = products.find(prod => prod.id === id)
        if (product) productsInCart.push({product, quantity: cart[id]})
   }
    return productsInCart;
}

export default function CartPage() {

    const cookiesStore = cookies();
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as {[id:string]: number};
    const productsInCart = getProducts(cart)

    const totalToPlay = productsInCart.reduce((prev, current)=>(
        current.product.price * current.quantity
    ) + prev , 0)
    
  return (
    <div>
      <h1 className="text-4xl font-medium">Productos del carrito</h1>
      <hr className="my-4"/>
      <div className="flex flex-col  sm:flex-row gap-2 w-full ">
            <div className="flex flex-col gap-2 w-full sm:w-8/12 ">
                {
                    productsInCart.map(({product , quantity})=>(
                        <ItemCard key={product.id} product={product} quantity={quantity}/>
                    ))
                }
            </div>
            
            <div className="flex flex-col w-full sm:w-4/12">
                <WidgetItem title="Total a pagar">
                    <div className="flex justify-center gap-4">
                        <h3 className="text-3xl font-bold text-gray-600">$ {(totalToPlay * 1.19).toFixed(2)}</h3>
                    </div>
                    <span className="font-bold text-center gap-4">impuesto 19%: {(totalToPlay * 0.19).toFixed(2)}</span>
                </WidgetItem>
            </div>

      </div>
    </div>
  );
}