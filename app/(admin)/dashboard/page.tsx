'use client'
import { ProductType } from '@/lib/definitions';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Modal } from "flowbite-react";
import Image from 'next/image';

export default function Dashboard() {
  const ENDPOINT = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductType | null>(null);
  // fetch products
  useEffect(() => {
    setLoading(true);
    fetch(ENDPOINT).then(res => res.json()).then(data => {
      setProducts(data);
      setLoading(false);
    }).catch((error)=>{
      console.log(error)
      setLoading(false);
    })
  },[])

  const [imagePlaceholder, setImagePlaceholder] = useState<string>("https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg");
  const handleViewProduct = (product: ProductType) => {
    setProductDetail(product);
    setOpenModal(true);
  }

  const columns:TableColumn<ProductType>[] = [
    {
      name: 'Product Title',
      selector: (row) => row.title,
      sortable: true,
      width: "300px"
    },
    {
      name: 'Price (USD)',
      selector: (row) => row.price,
      sortable: true,
      width: "150px"
    },
    {
      name: 'Image',
      selector: (row): any => <img src={row.image} alt={row.title} className='w-12 h-12 p-1'/>,
      width: "150px"
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      width: "150px",
      sortable: true
    },
    {
      name: 'Description',
      selector: (row) => row.description,
      width: "200px"  
    },
    {
      name: 'Action',
      selector: (row): any => 
      <div>
        <button 
        onClick={()=> handleViewProduct(row)} 
        className='bg-blue-600 p-2 m-2 rounded-lg text-gray-200'
        >View</button>
        <button className='bg-yellow-400 p-2 m-2 rounded-lg text-gray-200'>Edit</button>
        <button className='bg-red-600 p-2 m-2 rounded-lg text-gray-200'>Delete</button>
      </div>
    }
  ];

  return (
    <main className="h-screen">
      <DataTable 
      fixedHeader
      progressPending={loading}
			columns={columns}
			data={products}
      pagination
      customStyles={customStyles}
      striped
      pointerOnHover
		/>
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Detail</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Image 
            src={productDetail?.image || imagePlaceholder}
            alt={productDetail?.title || "Untitle"} 
            width={250}
            height={300}/>
            <h3 className="text-3xl text-gray-700">{productDetail?.title || "Untitle"}</h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{productDetail?.description || "No description"}
						</p>

          </div>
        </Modal.Body>
      
      </Modal>
    </main>
  )
}


const customStyles = {
	rows: {
		style: {
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '38px', // override the cell padding for head cells
			paddingRight: '8px',
      fontSize: '1rem',
      backgroundColor: '#f1f5f9',
		},
	},
	cells: {
		style: {
			paddingLeft: '38px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};

