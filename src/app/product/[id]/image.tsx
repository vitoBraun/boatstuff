"use client"
import React from 'react'
import Image from "next/image";
import { makeImageUrlArray } from '@/app/common/utils';

export default function ImageComp({ images }: { images: string }) {
    return (
        <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
            <img
                src={makeImageUrlArray(
                    images
                )[0]}
                alt="Image alt"
                className="w-full h-full object-cover"
                width={
                    400
                }
                height={
                    500
                }
            />
        </div>
    )
}
