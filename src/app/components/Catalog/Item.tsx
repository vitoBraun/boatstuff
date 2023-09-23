import { makeImageUrlArray } from '@/app/common/utils'
import { Product } from '@/app/types/types'
import React from 'react'
import { CarouselItem } from './Carousel'

export default function Item({ product }: { product: Product }) {
    const images = product.images ? makeImageUrlArray(product.images) : []
    return (
        <a
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
        >
            <div className="w-300">
                <CarouselItem images={images} />
                <div className="px-6 py-4 w-full rounded-b-lg shadow ">
                    <div className="mb-2">
                        <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
                    </div>
                    <p>
                        {product.shortDescription}
                    </p>
                    <div className="mt-4">
                        <p className="text-2xl font-bold">{product.price?.toLocaleString("th-TH", {
                            style: "currency",
                            currency: "THB",
                        })}</p>
                    </div>
                </div>
            </div >
        </a>
    )
}
