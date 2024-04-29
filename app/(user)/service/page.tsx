'use client'
import CardProduct from '@/components/card/CardProduct';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function Service() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => setProducts(data))
  },[]);
  return (
    <main className="h-screen flex flex-wrap gap-5 justify-center mt-10">  
        {
          products.map((product: any, index) => ( 
            <CardProduct onClick={ () => router.push(`/service/${product.id}`)}
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
            /> 
          ))
        }
    </main>
  )
}
