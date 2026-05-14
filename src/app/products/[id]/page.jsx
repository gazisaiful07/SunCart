import products from "@/data/products.json";
const ProductDetailsPage = ({ params }) => {
  const product = products.find(
    (item) => item.id === parseInt(params.id)
  );

  if (!product) {
    return (
      <div className="py-40 text-center text-white">
        Product not found
      </div>
    );
  }
   return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      <div className="grid gap-10 lg:grid-cols-2">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-purple-400">
            {product.category}
          </p>

          <h1 className="mt-3 text-5xl font-bold text-white">
            {product.name}
          </h1>

          <p className="mt-5 text-gray-400 leading-8">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <p className="text-4xl font-bold text-white">
              ${product.price}
            </p>

            <p className="text-yellow-400">
              {product.rating}
            </p>
          </div>

          <p className="mt-5 text-gray-400">
            Stock Available: {product.stock}
          </p>

          <button className="btn gradient-btn mt-10 px-10">
            Buy Now
          </button>
        </div>

      </div>

    </section>
  );
};

export default ProductDetailsPage;