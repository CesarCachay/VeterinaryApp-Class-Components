import React, { Component } from "react";
import Product from "./Product";

class Productos extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = [
  //     { id: 1, name: "Camisa ReactJS", price: 30 },
  //     { id: 2, name: "Camisa VueJS", price: 30 },
  //     { id: 3, name: "Camisa Angular", price: 30 },
  //     { id: 4, name: "Camisa NodeJS", price: 30 }
  //   ];
  // }
  state = {
    productos: [
      { id: 1, name: "Camisa ReactJS", price: 30 },
      { id: 2, name: "Camisa VueJS", price: 30 },
      { id: 3, name: "Camisa Angular", price: 30 },
      { id: 4, name: "Camisa NodeJS", price: 30 }
    ],
    totalCost: 500,
    customer: "Cesar"
  };

  componentDidMount() {
    console.log(1);
  }

  componentWillMount() {
    console.log(2);
  }

  componentWillUpdate() {
    console.log(3);
  }

  componentWillUnmount() {
    console.log(4);
  }

  render() {
    console.log(5);

    const { productos } = this.state;

    return (
      <>
        <div>Lista de Productos</div>;
        {productos.map(producto => (
          <Product key={producto.id} producto={producto} />
        ))}
      </>
    );
  }
}

export default Productos;
