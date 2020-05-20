import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProducts: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempproducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempproducts = [...tempproducts, singleItem];
        })
        this.setState(() => {
            return { products: tempproducts }
        })
    }

    handleDetail = () => {
        console.log("a");
    };
    addToCart = (id) => {
        console.log(`${id}`);
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };