'use client'
import { useAppSelector, useAppDispatch } from "@/redux/hooks"  
import { selectProducts, selectTotalPrice } from "@/redux/features/cart/cartSlice"
import { removeFromCart } from "@/redux/features/cart/cartSlice";
export default function Cart() {
    const products = useAppSelector(selectProducts);
    const totalPrice = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();

  return (
    <main className="grid place-content-center">
        {
            products.length ==0 && <h1 className="text-2xl">Cart is Empty!</h1>
        }
        {
            products.length !== 0 && (
                <div>
                    <h1 className="text-2xl">
                        Total Product <span className="text-blue-500">{products.length}</span>
                    </h1>
                    <h2 className="text-2xl">
                        Total Price $ <span className="text-blue-500">{totalPrice}</span>
                    </h2>
                </div>
            )
        }

        {
            products.length !== 0 &&
            products.map((product, index) => (
                <div className="w-1/2 bg-gray-100 my-4 p-4 rounded-xl" key={product.id}>
                    <div>
                        <h1>{product.title}</h1>
                        <h2 className="text-red-600">${product.price}</h2>
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div>
                        <button onClick={()=>dispatch(removeFromCart(product.id))} className="bg-red-500 text-white p-2 rounded-xl">
                            Remove
                        </button>
                    </div>
                </div>
            ))
        }
    </main>
  )
}
