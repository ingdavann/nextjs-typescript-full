'use client'
import CardProduct from '@/components/card/CardProduct';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function Service() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);
  return (
    <>
      {
        session ? <main className="w-[90%] mx-auto">
          <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-col-4 gap-5 mt-10'>
            {
              products.map((product: any, index) => (
                <CardProduct onClick={() => router.push(`/service/${product.id}`)}
                  key={index}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              ))
            }
          </section>
        </main> : <main className="w-full h-screen flex flex-col justify-center items-center">
          Unathorized
        </main>
      }
    </>
  )
}
