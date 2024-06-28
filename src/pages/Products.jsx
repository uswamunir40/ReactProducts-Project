import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  // let products = [];
  const [searchString, setSearchString] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const getProducts = async () => {
    const response = await axiosInstance.get("/products");
    console.log(response.data);
    setProducts(response.data);
    setSearchedProducts(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const searchResults = products.filter((product) => {
      if (product.title.toLowerCase().includes(searchString.toLowerCase()))
        return true;
      else return false;
    });
    setSearchedProducts(searchResults);
  }, [searchString]);

  console.log("PRoducts : ", products);
  return (
    <div>
      <h1 className="my-5 flex justify-center text-4xl font-semibold">
        Products
      </h1>

      <form className="my-5 flex justify-center">
        <div className="relative w-1/2">
          <label
            htmlFor="search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search"
              required
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
          </div>
        </div>
      </form>

      <div className="mx-10 grid grid-cols-3 gap-x-8 gap-y-4">
        {searchedProducts.map((product, index) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
