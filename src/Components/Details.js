import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            inCart,
            title
          } = value.detailsPro;
          return (
            <div className="container">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
                {/*end of title */}
                {/* product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 ">
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model:{title}</h2>
                    <div className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :<span className="text-uppercase">{company}</span>
                      <h4 className="text-blue">
                        <strong>
                          price: <span>$</span>
                          {price}
                        </strong>
                      </h4>
                      <p className="text-capitaize font-weight-bold mt-3 mb-0">
                        some info about the product:
                      </p>
                      <p className="text-muted">{info}</p>
                      {/*buttons */}
                      <div>
                        <Link to="/">
                          <ButtonContainer>back to products</ButtonContainer>
                        </Link>
                        <ButtonContainer
                          cart={inCart}
                          disabled={inCart ? true : false}
                          onClick={() => {
                            value.addtoCart(id);
                          }}
                        >
                          {inCart ? "in Cart" : "add to cart"}
                        </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
