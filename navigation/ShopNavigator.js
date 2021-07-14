import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductsDetailsScreen from '../screens/shop/ProductsDetailsScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
	ProductsOverview: ProductsOverviewScreen,
	ProductDetail: ProductsDetailsScreen

},{
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor: Platform.OS === 'android' ? Colors.primary: ''
		},
		headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary
	}
});

export default createAppContainer(ProductsNavigator);