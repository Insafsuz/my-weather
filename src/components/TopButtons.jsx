import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Москва",
    },
    {
      id: 2,
      title: "Каспийск",
    },
    {
      id: 3,
      title: "Токио",
    },
    {
      id: 4,
      title: "Лондон",
    },
    {
      id: 5,
      title: "Дубай",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
