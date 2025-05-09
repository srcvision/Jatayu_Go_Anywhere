import React from "react";

const CaptainDeatil = () => {
  return (
    <div className="pb-3">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAP1BMVEX///+ZmZmVlZXq6uqSkpL6+vqenp7g4OCPj4/v7++rq6vy8vKlpaXj4+PZ2dn39/fDw8O4uLiysrLR0dHLy8sxag3jAAAE7UlEQVR4nO1ciY7bIBANGHzbwXb+/1vrYzcbO8AcYCeqeFUrtdLSx8CczPh2S0hISEhISEhISEiIB10VkxnGDYOZikp/mtKGppuGVpWlUlKKBVKq5a/5MHXNZ6ndZ2ZCbayOkEq0w3T/FLWqb58Cc2CWY9tXH+DWmVz5iD2hctNdS013tfAK7YC6u1BLirokUFsFWBcXcatGktw2SDFeocGNcegoyE+Z0xW4q3G6YIOqz1UPbfjcVn7DidqRjWHkFvGddvsKhjYcIcVJyvsI57bye3wxufl049PTQ+iV+0MZXTcikltUNyq3UEvyTi+m9EysO/ekZ+KRm6hOH0FvikWux0lOLrHo8geOXx+H3B1FrVTDVHRZV0yjwok6itfQLSwMKYbs5UeyAeFVZBtDMxAaUe64bfxg+ckImlGAtkTmtivU5+CuVLDL1TlMzp50VTC9PPRswXOV7fFUn/RacGOBZ9vB+3enqxUodxEWLNcQu9Jntnrozso6hFwPaR5wNuC98G4OgK6BxYXwlyEq8OdrvmKALgyMc8GQVfKFB3oJBXmjBrwaLZdcB9p7+FKDd6N0GSQIIyg6OAyawKMdeeQQ5gp2RQVsMHnCg5MwxMIZuEVeiqZBSyxauKwJuzOeUcngRKeFA8gGZic5R/u4ih3raOFlI52sYJi8Bl41jlYIToaBSsRgN4RZhuHNMAk2ImfGLEMPQjXoKBbANwZzsGKk2hSErs0oodgWdtXrJqkXL8OsOu8aWAZ1AkJQLR6cKG7wC6/DLUJOHSccO+l1Q4jYemNHtccDslbjVVuEu4EXsQF5YbwxHpiS/YIc46FUdoOLXo9fgurL8Cu7pAdGxa8gsqMsrSzPhxWpDC5PZCdkflA6/YBLPJexm8WnTNH8GJemMJJYoj+Z3VL+bMfBPMwwtoL8fHA6u/U/WcD6wSvYsUFlR1l6/p0f8fPvWBDZYa2xErWZuubobXXT9aZGX0CqNYaT2Y3bI3O3ItyzB44fuciIirhrRF6B6XIgRwFwBCXFhAm49QRfQHIEBUafcsB2l9zBaIwcfYKRO+WNcIIWo0buUHmMVsoHInjPq4Id3oxRkmtumbfIS84Yb8azmqJXjXwVLcaTj6/EwHl9Kzzs6JUKd5WH2U/iSYEY78guX8YtQ7vdD+dRwLlXbgnfZaRYZ+G4xwFtTI4yOUPHnFXtnN+AeLfbUN5TmXWrQS1W1o4g5mHY3UVI76a2ngbzHo+WjYb1V1niAbYJsJQGAx4sF1hMPFigdOJdL8j+eg/LZWG/gFq2GvSOf7M8iAYcxlt1MLj95i0hqAO07Ni1oEIbv44JQUjXwtvNYz9E/yLbbzes4+PYLVOGdqUd+wQCW8v35r0M7aO/79gFX+N9l1YZ2lald+yCu7T2qWNcduEdbnsjEJVdjO7A2/0lnYrKLkpn5WtXquqyMHQv9yTSpMqrQ5OB+FsoUkcv+tGMgnjd0N/dSa6jzi9EJrfimycY4k5/RCd3izg5E8UKn0XvnKmjpZfuiye24ky7nTjrGzwpaM6do/3mKcvbOqHKFtwVI+bfPN27oCAf73WT0TN0QZkql9dOlS9YJvJx75D5cPFE/oqmb6GH9o99zWCF/0sQ8pNfgtjw/IrGU4yzwOa/tp//isYvfr9AUs+/lr6Pr/kCSUJCQkJCQkJCQsJ/gn/OSDleuXBZaQAAAABJRU5ErkJggg=="
            alt="Captain Avatar"
            className="h-12 w-12 object-cover rounded-full shadow"
          />
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Saurav Chaudhari
            </h4>
            <p className="text-sm text-gray-500">Captain</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-bold text-green-600">₹295.50</h4>
          <p className="text-sm text-gray-500">Earned Today</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex justify-between text-center">
          <div className="flex-1">
            <i className="text-3xl text-blue-500 ri-timer-2-line"></i>
            <h5 className="font-semibold text-lg mt-1">10.2</h5>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
          <div className="flex-1">
            <i className="text-3xl text-yellow-500 ri-route-line"></i>
            <h5 className="font-semibold text-lg mt-1">150</h5>
            <p className="text-sm text-gray-500">Total KM</p>
          </div>
          <div className="flex-1">
            <i className="text-3xl text-green-500 ri-taxi-line"></i>
            <h5 className="font-semibold text-lg mt-1">15</h5>
            <p className="text-sm text-gray-500">Total Rides</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainDeatil;
