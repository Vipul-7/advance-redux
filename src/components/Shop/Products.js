import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "i1", price: 79, title: "AirPods", description: "Airpods from Apple" },
  {
    id: "i2",
    price: 50.23,
    title: "Ear buds",
    description: "Ear buds from One Plus",
  },
  {
    id:'i3',
    price:99,
    title:'Apple SmartWatch',
    description : 'Smart watch by Apple'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
