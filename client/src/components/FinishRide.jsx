import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      {/* Close Button */}
      <button
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="flex items-center justify-center mb-1 mt-2 w-full"
        aria-label="Close Panel"
      >
        <i className="ri-arrow-down-wide-fill text-gray-400 text-3xl hover:text-gray-800 transition duration-300 cursor-pointer"></i>
      </button>
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Finish this Ride
      </h2>

      {/* Ride Details Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-6 mx-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAP1BMVEX///+ZmZmVlZXq6uqSkpL6+vqenp7g4OCPj4/v7++rq6vy8vKlpaXj4+PZ2dn39/fDw8O4uLiysrLR0dHLy8sxag3jAAAE7UlEQVR4nO1ciY7bIBANGHzbwXb+/1vrYzcbO8AcYCeqeFUrtdLSx8CczPh2S0hISEhISEhISEiIB10VkxnGDYOZikp/mtKGppuGVpWlUlKKBVKq5a/5MHXNZ6ndZ2ZCbayOkEq0w3T/FLWqb58Cc2CWY9tXH+DWmVz5iD2hctNdS013tfAK7YC6u1BLirokUFsFWBcXcatGktw2SDFeocGNcegoyE+Z0xW4q3G6YIOqz1UPbfjcVn7DidqRjWHkFvGddvsKhjYcIcVJyvsI57bye3wxufl049PTQ+iV+0MZXTcikltUNyq3UEvyTi+m9EysO/ekZ+KRm6hOH0FvikWux0lOLrHo8geOXx+H3B1FrVTDVHRZV0yjwok6itfQLSwMKYbs5UeyAeFVZBtDMxAaUe64bfxg+ckImlGAtkTmtivU5+CuVLDL1TlMzp50VTC9PPRswXOV7fFUn/RacGOBZ9vB+3enqxUodxEWLNcQu9Jntnrozso6hFwPaR5wNuC98G4OgK6BxYXwlyEq8OdrvmKALgyMc8GQVfKFB3oJBXmjBrwaLZdcB9p7+FKDd6N0GSQIIyg6OAyawKMdeeQQ5gp2RQVsMHnCg5MwxMIZuEVeiqZBSyxauKwJuzOeUcngRKeFA8gGZic5R/u4ih3raOFlI52sYJi8Bl41jlYIToaBSsRgN4RZhuHNMAk2ImfGLEMPQjXoKBbANwZzsGKk2hSErs0oodgWdtXrJqkXL8OsOu8aWAZ1AkJQLR6cKG7wC6/DLUJOHSccO+l1Q4jYemNHtccDslbjVVuEu4EXsQF5YbwxHpiS/YIc46FUdoOLXo9fgurL8Cu7pAdGxa8gsqMsrSzPhxWpDC5PZCdkflA6/YBLPJexm8WnTNH8GJemMJJYoj+Z3VL+bMfBPMwwtoL8fHA6u/U/WcD6wSvYsUFlR1l6/p0f8fPvWBDZYa2xErWZuubobXXT9aZGX0CqNYaT2Y3bI3O3ItyzB44fuciIirhrRF6B6XIgRwFwBCXFhAm49QRfQHIEBUafcsB2l9zBaIwcfYKRO+WNcIIWo0buUHmMVsoHInjPq4Id3oxRkmtumbfIS84Yb8azmqJXjXwVLcaTj6/EwHl9Kzzs6JUKd5WH2U/iSYEY78guX8YtQ7vdD+dRwLlXbgnfZaRYZ+G4xwFtTI4yOUPHnFXtnN+AeLfbUN5TmXWrQS1W1o4g5mHY3UVI76a2ngbzHo+WjYb1V1niAbYJsJQGAx4sF1hMPFigdOJdL8j+eg/LZWG/gFq2GvSOf7M8iAYcxlt1MLj95i0hqAO07Ni1oEIbv44JQUjXwtvNYz9E/yLbbzes4+PYLVOGdqUd+wQCW8v35r0M7aO/79gFX+N9l1YZ2lald+yCu7T2qWNcduEdbnsjEJVdjO7A2/0lnYrKLkpn5WtXquqyMHQv9yTSpMqrQ5OB+FsoUkcv+tGMgnjd0N/dSa6jzi9EJrfimycY4k5/RCd3izg5E8UKn0XvnKmjpZfuiye24ky7nTjrGzwpaM6do/3mKcvbOqHKFtwVI+bfPN27oCAf73WT0TN0QZkql9dOlS9YJvJx75D5cPFE/oqmb6GH9o99zWCF/0sQ8pNfgtjw/IrGU4yzwOa/tp//isYvfr9AUs+/lr6Pr/kCSUJCQkJCQkJCQsJ/gn/OSDleuXBZaQAAAABJRU5ErkJggg=="
              alt="Captain Avatar"
              className="h-14 w-14 object-cover rounded-full shadow-md"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Saurav Chaudhari
              </h4>
              <p className="text-sm text-gray-500">Captain</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-bold text-gray-800">2.2 KM</h4>
            <p className="text-sm text-gray-500">Distance</p>
          </div>
        </div>
      </div>

      {/* Pickup Info */}
      <div className="flex items-start space-x-4 mb-4 px-6">
        <i className="ri-map-pin-2-fill text-3xl text-blue-500"></i>
        <div>
          <p className="font-medium text-lg text-gray-800">562/11-A</p>
          <p className="text-sm text-gray-500">Kankariya Lake, Ahmedabad</p>
        </div>
      </div>

      {/* Dropoff Info */}
      <div className="flex items-start space-x-4 mb-4 px-6">
        <i className="ri-map-pin-3-fill text-3xl text-red-500"></i>
        <div>
          <p className="font-medium text-lg text-gray-800">
            Sardar Patel Stadium
          </p>
          <p className="text-sm text-gray-500">Ahmedabad</p>
        </div>
      </div>

      {/* Price Info */}
      <div className="flex items-start space-x-4 mb-6 px-6">
        <i className="ri-money-rupee-circle-fill text-3xl text-green-600"></i>
        <div>
          <p className="font-medium text-lg text-gray-800">₹193.50</p>
          <p className="text-sm text-gray-500">Payment via Cash or UPI</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center">
        <Link
          to="/captain-home"
          className="w-1/2 flex justify-center items-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
        >
          Finish Ride
        </Link>
      </div>
      <p className="text-[13px] pl-8 pr-8 text-justify leading-tight text-gray-600 mt-4">
        Click on finish ride button if you have completed the payment
      </p>
    </div>
  );
};

export default FinishRide;
