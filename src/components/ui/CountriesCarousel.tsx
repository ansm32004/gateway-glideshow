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
  { code: "eu", name: "Schengen" },
]

export default function CountriesCarousel() {
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
              <div className="w-20 h-14 bg-gray-100 flex items-center justify-center rounded-sm overflow-hidden">
                {code !== "eu" ? (
                  <img
                    src={`https://flagcdn.com/${code}.svg`}
                    alt={name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
                    alt="Schengen"
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
              <span className="mt-3 font-semibold">{name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
