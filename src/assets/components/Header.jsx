import { useContext } from "react";
import logo from "../logo.jpg";
import Button from "./UI/Button";
import CartContext from "../../store/CartContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalcartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="a restaurent" />
        <h1> ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalcartItems})</Button>
      </nav>
    </header>
  );
}
