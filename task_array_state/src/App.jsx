import { useState } from "react";
import "./App.css";
// البيانات الأولية الموجودة في التحدي
const initialProducts = [
  { id: 0, name: "baklava", count: 1 },
  { id: 1, name: "mousaka", count: 1 },
  { id: 2, name: "spaghetti", count: 1 },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      }),
    );
  }

  function handleDecreaseClick(productId) {
    // setProducts(
    //   products.map((product) => {
    //     if (product.id === productId) {
    //       return { ...product, count: product.count - 1 };
    //     }
    //     return product;
    //   })
    //   .filter((product)=>product.count>0)
    // );

    //Another Solution
    let newproducts = []
    for(let product of products){
      if(product.id===productId){
        if(product.count>1){
          let newproduct = {
            ...product,count:product.count-1
          }
          newproducts.push(newproduct)
        }
      }else{
        newproducts.push(product)
      }
    }
    setProducts(newproducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} ({product.count})
          <div className="btn-group">
            <button
              className="btn decrease"
              onClick={() => handleIncreaseClick(product.id)}
            >
              +
            </button>
            <button
              className="btn increase"
              onClick={() => handleDecreaseClick(product.id)}
            >
              -
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
