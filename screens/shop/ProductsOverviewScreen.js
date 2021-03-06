import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
	const products = useSelector(state => state.products.avaiableProducts);
	return (
		<FlatList 
			data={products} 
			keyExtractor={item => item.id} 
			renderItem={
				itemData => <ProductItem 
								image = {itemData.item.imageURL}
								title = {itemData.item.title}
								price = {itemData.item.price}
								onViewDetail = {()=>{
									props.navigation.navigate(
										'ProductDetail', 
										{
											productId: itemData.item.id,
											productTitle: itemData.item.title
										}
									)
								}}
								onAddToCart = {()=>{}}
							/>
			}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = {
	title: 'Svi proizvodi'
};

export default ProductsOverviewScreen;