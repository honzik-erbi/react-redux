// import "./Cart.css";

// import { UseDispatch, useDispatch, useSelector } from "react-redux";
// import { PcState, remove } from "../../pages/PcOrder/PcSlice";
// import { render } from "react-dom";

// export default function PcCart() {
//   const orders = useSelector((state: PcState) => state.pc.orders);
//   const dispatch = useDispatch();

//   const removePizza = (index: number) => {
//     dispatch(remove(index));
//   };

//   const renderOrders = () => {
//     const foo = [];
//     for (const [key, value] of Object.entries(orders)) {
//       foo.push(
//         <p key={key}>
//           {key}: {value}
//           <button className="cart-remove-btn" onClick={() => removePc(key as unknown as number)}>X</button>
//         </p>
//       );
//     }
//     return foo;
//   };

//   return (
//     <>
//       <p>Your Orders:</p>
//       {renderOrders()}
//     </>
//   );
// }