import { Spinner } from 'flowbite-react'
import React from 'react'

export default function Loading() {
    return (
        <div className='h-screen flex w-full justify-center items-center'>
            <Spinner size='lg'/>
        </div>
    )
}
