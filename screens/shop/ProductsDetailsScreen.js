import React from 'react';
import { 
	ScrollView, 
	View, 
	Text, 
	Image, 
	StyleSheet, 
	Button,
	TouchableOpacity 
} from 'react-native';
import { useSelector } from 'react-redux'

const ProductsDetailsScreen = props =>{
	const productId = props.navigation.getParam('productId');
	const selectedProduct = useSelector(state => 
		state.products.avaiableProducts.find(prod => prod.id === productId)
	);


	return(
		<View>
			<Text>{selectedProduct.title}</Text>
		</View>
	);

};

ProductsDetailsScreen.navigationOptions = navData => {
	return {
		title: navData.navigation.getParam('productTitle')
	};
}	

const styles = StyleSheet.create({

});


export default ProductsDetailsScreen;