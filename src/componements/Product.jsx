import Counter from "./Counter";
import Productchild from "./Productchild";
import { useState } from "react";

function Product() {
    let title="Learn How To Create React JS";
    let showList = true;
    const [products, setProducts]=useState(
      [
        {
            id: 1,
            label: "IPhone",
            price: 3000

        },
        {
            id: 2,
            label: "Samsung",
            price: 1500

        },
        {
          id: 3,
          label: "Nokia",
          price: 100

      }
    ]
    );
   
    const deleteProduct=(id)=>{
     let myList = products.filter(product =>product.id !==id)
     setProducts((prev )=> {
      console.log(prev)
      return myList
    });

    };
  return (
    <div>
     <h1>{title}</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, expedita corporis. Animi, aliquam necessitatibus doloremque omnis expedita blanditiis exercitationem distinctio eveniet cumque suscipit fugiat dignissimos ratione sed, culpa earum sapiente.</p>
     <Counter />
    
     {
        showList &&(
    <div>

        {products.map((product, index)=>(
        <div key={index}>
          <Productchild id={product.id} onDeleteProduct={deleteProduct}>
          <div className="card-body">
            <p>Lorem ipsum dolor sit.</p>
            <h4 className="card-title">{product.label}</h4>
            <p className="card-text">
                <button className="btn btn-danger">{product.price}</button>
            </p>
          </div>
          </Productchild>
        </div>
        ))}
     </div>
     )}
    </div>
  );
}

export default Product

