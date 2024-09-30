import Image from "next/image";

const ProductData = [
  {
    product_id: "PRODUCT ID 1",
    user_id: "USER ID",
    product_name: "PRODUCT NAME 1",
    product_price: "100.000",
    product_description: "Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    created_date: "2024-09-11",
    modified_datetime: "2024-09-12 09:00:12",
  },
  {
    product_id: "PRODUCT ID 2",
    user_id: "USER ID",
    product_name: "PRODUCT NAME 2",
    product_price: "200.000",
    product_description: "Description 2 Description 2 Description 2 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    created_date: "2024-09-11",
    modified_datetime: "2024-09-12 09:00:12",
  },
  {
    product_id: "PRODUCT ID 3",
    user_id: "USER ID",
    product_name: "PRODUCT NAME 3",
    product_price: "300.000",
    product_description: "Description 3 Description 3 Description 3 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    created_date: "2024-09-11",
    modified_datetime: "2024-09-12 09:00:12",
  },
  {
    product_id: "PRODUCT ID 4",
    user_id: "USER ID",
    product_name: "PRODUCT NAME 4",
    product_price: "400.000",
    product_description: "Description 4 Description 4 Description 4 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1",
    created_date: "2024-09-11",
    modified_datetime: "2024-09-12 09:00:12",
  },
]

export default function ProductList() {
  return (
    <div className="mt-14 mb-12 flex flex-col items-center">
      <div className="container">
        {/* <div className="text-center mb-10 max-w-[600px] mx-auto"> */}
        <div className="text-center mb-10">
          <p className="text-3xl font-bold">YOUR PRODUCTS</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center ml-10 mr-10">
          {ProductData.map((data) => (
            <div className="bg-gray-200 p-5 rounded-xl cursor-pointer m-5 hover:shadow-2xl">
              <div className="flex justify-between mb-2">
                <p>{data.product_name}</p>
                <p className="font-semibold">Rp{data.product_price}</p>
              </div>
              <div className="flex justify-between align-middle">
                <div className="text-xs text-gray-600">
                  <p>Created: {data.created_date}</p>
                  <p>Last Modified: {data.modified_datetime}</p>
                </div>
                <div className="flex gap-3 items-center ml-10">
                  <p className="hover:font-bold hover:text-blue-500">Edit</p>
                  <p className="hover:font-bold hover:text-red-500">Delete</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end m-20 sticky bottom-5 right-5">
          <p className="bg-green-500 px-4 py-2 rounded-full text-2xl cursor-pointer">+</p>
        </div>
      </div>
    </div>
  );
}
