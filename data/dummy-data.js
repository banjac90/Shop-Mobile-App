import Product from '../models/product';

const PRODUCTS = [
	new Product(
		'p1',
		'u1',
		'Red Shirt',
		'https://www.looksharpstore.co.nz/wp-content/uploads/2018/04/T190-RED.jpg',
		'Crvena majica baci pare i kupi je',
		1500
	),
	new Product(
		'p2',
		'u1',
		'Blue Shirt',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxZ5d9g7hGEyYIH6aqM5PFtH3NAo9e5kcirQI8cRKrfc-E5_je',
		'Plava majica baci pare i kupi je',
		1600
	),
	new Product(
		'p3',
		'u2',
		'For the Horde Shirt',
		'https://ae01.alicdn.com/kf/HTB17Q.FKXXXXXXJXFXXq6xXFXXX4/Cool-Game-WOW-T-Shirt-Fashion-Short-Sleeve-WOW-horde-symbol-shirt-for-the-horde-7.jpg_640x640.jpg',
		'Budi hordas a ne pizda',
		3300
	),
	new Product(
		'p4',
		'u3',
		'Praise the Sun',
		'https://www.channeleffect.com/ImageHosting/viewImage?CompanyId=25072&FilePath=Images/219054',
		'Pozdrav suncu jakna',
		2400
	),
	new Product(
		'p5',
		'u3',
		'Bloodborne weapon',
		'https://images-na.ssl-images-amazon.com/images/I/71uNaBj8g4L._AC_SX425_.jpg',
		'Bloodborne oruzije',
		5000
	),
];

export default PRODUCTS;