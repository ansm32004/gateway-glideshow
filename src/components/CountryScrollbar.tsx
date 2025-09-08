"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const countries = [
  { code: "ca", name: "Canada" },
  { code: "gb", name: "United Kingdom" },
  { code: "au", name: "Australia" },
  { code: "nz", name: "New Zealand" },
  { code: "us", name: "United States" },
  { code: "eu", name: "Europe" },
]

export default function CountryScrollbar() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="gap-6">
        {countries.map(({ code, name }) => (
          <CarouselItem
            key={code}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <div className="flex flex-col items-center justify-center h-40 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              
             {/* Flag container with fixed ratio */}
              <div className="w-14 h-10 flex items-center justify-center bg-white">
                <img
                  src={
                    code !== "eu"
                      ? `https://flagcdn.com/${code}.svg`
                      : "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                  }
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>



              <span className="mt-3 font-semibold">{name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

