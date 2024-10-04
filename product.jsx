function Products() {
  const products = [];

  console.log(Products[0]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start max-w-4xl mx-auto mt-10">
      {/* Product Image */}
      <div className="relative">
        <img
          src="https://example.com/iphone15.png" // replace with the actual product image URL
          alt="Apple iPhone 15 (Black, 128 GB)"
          className="w-40 h-40 object-cover rounded-md"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          Bestseller
        </div>
      </div>

      {/* Product Info */}
      <div className="ml-6 flex-1">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-blue-600"></h2>n
        {/* Rating and Reviews */}
        <div className="flex items-center space-x-2 mb-2">
          <span className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded-md">
            4.6★
          </span>
          <p className="text-gray-600 text-xs">
            1,21,534 Ratings & 3,945 Reviews
          </p>
        </div>
        {/* Specifications */}
        <ul className="text-gray-700 text-sm mb-4 space-y-1">
          <li>128 GB ROM</li>
          <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
          <li>48MP + 12MP | 12MP Front Camera</li>
          <li>A16 Bionic Chip, 6 Core Processor</li>
          <li>1 Year Warranty for Phone & 6 Months Warranty for Accessories</li>
        </ul>
        {/* Delivery and Offer Section */}
        <div className="text-green-700 font-semibold text-sm mb-2">
          Free delivery
        </div>
        <p className="text-purple-600 font-semibold text-sm mb-2">
          Top Discount of the Sale
        </p>
        <p className="text-gray-600 text-xs">Upto ₹34,950 Off on Exchange</p>
      </div>
    </div>
  );
}

export default Products;
