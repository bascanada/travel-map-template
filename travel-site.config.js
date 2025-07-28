const config = {
	title: 'Travel Site',
	description: 'Share your travel adventures',
	logo: 'favicon.svg',
	favicon: 'favicon.svg',
	travelIndex: 'data/index.json',
	skeletonTheme: 'mint',
	
	// Base path configuration for deployment
	basePath: process.env.NODE_ENV === 'production' ? '/travel-map-template' : '',
	
	// Image hosting configuration
	images: {
		// Switch between 'local' and 'cloudinary'
		provider: 'cloudinary', // Change to 'cloudinary' when ready
		
		cloudinary: {
			cloudName: 'dgg5cyhsu', // Replace with your Cloudinary cloud name
			baseUrl: 'https://res.cloudinary.com/dgg5cyhsu/image/upload',
			
			// Pre-defined transformations for different image sizes
			transformations: {
				thumbnail: 'c_limit,w_400,h_300,q_auto:eco,f_auto',
				medium: 'c_limit,w_800,h_600,q_auto:good,f_auto',
				large: 'c_limit,w_1200,h_900,q_auto:good,f_auto',
				original: 'q_auto:good,f_auto'
			}
		}
	}
};

export default config;
