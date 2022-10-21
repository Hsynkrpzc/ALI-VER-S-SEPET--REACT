import React from "react";
import { sepeteEkle } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Products = (props) => {
  // console.log("Products:", props.bookList);
  console.log(props);
  return (
    <div>
      <div className="w-100">
        <span className="float-start">Kitap Listesi</span>
      </div>
      <div className=" w-100">
        <Link to="/cart" className="float-end text-decoration-none">
          Sepetim
        </Link>
      </div>
      {props.bookList.map((book) => (
        <div className="book m-1" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>{book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => props.sepeteEkle(book)}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};

// const mapActionToProps = () => ({ sepeteEkle }); burayı mapActionToProps() şeklinde {sepeteEkle} yerine yazabilirdik.
export default connect(mapStateToProps, { sepeteEkle })(Products);
