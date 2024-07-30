import { useContext } from "react";
import logo from "../logo.jpg";
import Button from "./UI/Button";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserprogressContext";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalcartItems = cartCtx.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="a restaurent" />
        <h1> ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalcartItems})
        </Button>
      </nav>
    </header>
  );
}
