import React from "react";
import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { colors } from "../../constants/colors";
import { addItem } from "../../store/actions/cart.actions";
import { styles } from "./styles";

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onHandleAddToCart = () => {
    dispatch(addItem(product));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product?.name}</Text>
      <Text style={styles.description}>{product?.description}</Text>
      <Text style={styles.price}>$ {product?.price.toFixed(2)}</Text>
      <Text style={styles.weight}>Peso: {product?.weight}</Text>
      <Button
        title="Agregar al carrito"
        onPress={() => onHandleAddToCart()}
        color={colors.primary}
      />
    </View>
  );
};

export default Product;
