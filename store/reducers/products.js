import PRODUCTS from '../../data/dummy-data';



const initialState = {
	avaiableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter(product => product.ownerId === 'u1'),
};

export default (state = initialState, action) =>{
	return state;
}