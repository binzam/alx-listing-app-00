import Card from '@/components/common/Card';
import Pill from '@/components/common/Pill';
import { HERO_BgIMAGE, PROPERTYLISTINGSAMPLE } from '@/constants';
import { CardProps } from '@/interfaces';
import { useState } from 'react';
export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = ['Top Villa', 'Self Checkin', 'Beachfront', 'Private Pool'];

  const handleFilterClick = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };
  const handleClearFilters = () => {
    setSelectedFilters([]);
  };
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
    selectedFilters.every((filter) => property.category.includes(filter))
  );

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${HERO_BgIMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-96 flex items-center justify-center text-center text-white"
      >
        <div>
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-4 text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
      <section className="py-8 px-4 bg-gray-100">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-center  mr-4">
            Filter Properties
          </h2>
          {selectedFilters.length > 0 && (
            <button
              onClick={handleClearFilters}
              className="mb-4 px-4 py-1 bg-red-500 text-white font-sm rounded-full hover:bg-red-700 transition"
            >
              Clear Filters
            </button>
          )}
        </div>
        <div className="flex flex-wrap align-center justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              onClick={() => handleFilterClick(filter)}
              selected={selectedFilters.includes(filter)}
            />
          ))}
        </div>
      </section>
      <section className="py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Property Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(
              ({ name, image, price, rating }: CardProps, key: number) => (
                <Card
                  name={name}
                  image={image}
                  price={price}
                  rating={rating}
                  key={key}
                />
              )
            )
          ) : (
            <p>No properties found with the selected filters</p>
          )}
        </div>
      </section>
    </>
  );
}
