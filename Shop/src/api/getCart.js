import { AsyncStorage } from 'react-native';

const getCart = async () => {
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            console.log("we have data cart :")
            console.log(value);
            return JSON.parse(value); // return object json
        }
        return [];
    } catch (error) {
    // Error retrieving data
        return [];
    }
};

export default getCart;