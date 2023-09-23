
export function CarouselItem({ images }: { images: string[] }) {
    return (

        <div className="flex-shrink-0 w-full flex items-center justify-center overflow-hidden h-[200px] bg-gray-200">
            <img src={images[0]} className="object-cover h-full w-full rounded-t-lg" />
        </div>

    );
}
