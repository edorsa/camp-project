
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cardActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,//burda ... new lemek gibi bir şey gittik state in içini dizide olsa ayırırdı ya burdada ayırdı ve tetikledik artık farklı bir nesnemiz var store da tetikledik

        };
      } else {
        return {//zaten hali hazırda sepette ürün yoksa yeni ürün oluştururuz
                   
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };
    default:
      return state;
  }
}