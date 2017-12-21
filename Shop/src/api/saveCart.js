import { AsyncStorage } from 'react-native';

const saveCart = async (cartArray) => {
    await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
    // console.log("da luu cart");
};

export default saveCart;