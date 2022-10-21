import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      <h5>
        <Link to="/" className="float-start text-decoration-none">Kitap Listesi</Link>
      </h5>

      <h4 className="float-end text-decoration-none">Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h4>
      {props.cart.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378;{book.price}</p>
            {/* <p>Toplam: &#8378;19.99</p>
            <p>Sepetinizde bu kitaptan toplam 1 adet var.</p> 
            BU KISIM TARAFIMCA SONRADAN EKLENECEK */}
            <button className="btn btn-sm btn-danger">-</button>
            <button className="btn btn-sm btn-primary">Sepetten Çıkar</button>
            <button className="btn btn-sm btn-success">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Cart);
