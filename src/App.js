// // // // // // Importing required libraries and components
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import './App.css'; // Custom CSS for styling

// // // // // // Example of a simple functional component
// // // // // function App() {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [searchQuery, setSearchQuery] = useState('');

// // // // //   // Fetching products from an API
// // // // //   useEffect(() => {
// // // // //     fetch('https://app.getswipe.in/api/public/get')
// // // // //       .then((response) => response.json())
// // // // //       .then((data) => {
// // // // //         setProducts(data);
// // // // //         setLoading(false);
// // // // //       })
// // // // //       .catch((error) => {
// // // // //         console.error('Error fetching products:', error);
// // // // //         setLoading(false);
// // // // //       });
// // // // //   }, []);

// // // // //   // Filter products by search query
// // // // //   const filteredProducts = products.filter(product =>
// // // // //     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <div className="App">
// // // // //       <h1>Product Listing</h1>

// // // // //       {/* Search bar */}
// // // // //       <input
// // // // //         type="text"
// // // // //         placeholder="Search products"
// // // // //         value={searchQuery}
// // // // //         onChange={(e) => setSearchQuery(e.target.value)}
// // // // //       />

// // // // //       {/* Displaying loading indicator */}
// // // // //       {loading ? (
// // // // //         <p>Loading...</p>
// // // // //       ) : (
// // // // //         <div>
// // // // //           {/* Display list of products */}
// // // // //           {filteredProducts.length > 0 ? (
// // // // //             <ul>
// // // // //               {filteredProducts.map((product) => (
// // // // //                 <li key={product.product_name}>
// // // // //                   <h2>{product.product_name}</h2>
// // // // //                   <p>{product.product_type}</p>
// // // // //                   <p>Price: ${product.price}</p>
// // // // //                   <p>Tax: {product.tax}%</p>
// // // // //                   <img
// // // // //                     src={product.image || 'default-image.jpg'}
// // // // //                     alt={product.product_name}
// // // // //                     width="100"
// // // // //                   />
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           ) : (
// // // // //             <p>No products found</p>
// // // // //           )}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Button to navigate to "Add Product" screen */}
// // // // //       <button onClick={() => alert('Navigate to Add Product Screen')}>Add Product</button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // // // src/App.js
// // // // // import React, { useState } from 'react';
// // // // // import './App.css';

// // // // // function App() {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // //   const fetchProducts = async () => {
// // // // //     setIsLoading(true);
// // // // //     try {
// // // // //       const response = await fetch('https://app.getswipe.in/api/public/get');
// // // // //       const data = await response.json();
// // // // //       setProducts(data);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching products:", error);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const filteredProducts = products.filter(product =>
// // // // //     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <div className="App">
// // // // //       <h1 className="title">Product List</h1>
      
// // // // //       {/* Search and Load Button */}
// // // // //       <div className="search-container">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search products..."
// // // // //           value={searchQuery}
// // // // //           onChange={(e) => setSearchQuery(e.target.value)}
// // // // //           className="search-input"
// // // // //         />
// // // // //         <button onClick={fetchProducts} className="load-button">Load Products</button>
// // // // //       </div>

   
// // // // //       {isLoading && <div className="loading">Loading...</div>}

// // // // //       <ul className="product-list">
// // // // //         {filteredProducts.map((product, index) => (
// // // // //           <li className="product-card" key={index}>
// // // // //             <img src={product.image || 'https://via.placeholder.com/150'} alt={product.product_name} className="product-image" />
// // // // //             <div className="card-details">
// // // // //               <h3 className="product-title">{product.product_name}</h3>
// // // // //               <p className="product-type">Type: {product.product_type}</p>
// // // // //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// // // // //               <p className="product-tax">Tax: {product.tax}%</p>
// // // // //             </div>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import React, { useState, useEffect } from 'react';
// // // // import './App.css';

// // // // function App() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [favorites, setFavorites] = useState([]);

// // // //   // Fetch products from API
// // // //   const fetchProducts = async () => {
// // // //     setIsLoading(true);
// // // //     try {
// // // //       const response = await fetch('https://app.getswipe.in/api/public/get');
// // // //       const data = await response.json();
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching products:", error);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   // Load favorites from localStorage
// // // //   useEffect(() => {
// // // //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// // // //     setFavorites(savedFavorites);
// // // //   }, []);

// // // //   // Save favorites to localStorage
// // // //   useEffect(() => {
// // // //     localStorage.setItem('favorites', JSON.stringify(favorites));
// // // //   }, [favorites]);

// // // //   // Toggle favorite status for a product
// // // //   const toggleFavorite = (productId) => {
// // // //     setFavorites((prevFavorites) => {
// // // //       const isFavorite = prevFavorites.includes(productId);
// // // //       if (isFavorite) {
// // // //         return prevFavorites.filter((id) => id !== productId);
// // // //       } else {
// // // //         return [...prevFavorites, productId];
// // // //       }
// // // //     });
// // // //   };

// // // //   // Filter products based on search query
// // // //   const filteredProducts = products
// // // //     .filter((product) =>
// // // //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// // // //     )
// // // //     .sort((a, b) => {
// // // //       const isAFavorite = favorites.includes(a.id);
// // // //       const isBFavorite = favorites.includes(b.id);
// // // //       if (isAFavorite && !isBFavorite) return -1;
// // // //       if (!isAFavorite && isBFavorite) return 1;
// // // //       return 0;
// // // //     });

// // // //   return (
// // // //     <div className="App">
// // // //       <h1 className="title">Product List</h1>

// // // //       {/* Search and Load Button */}
// // // //       <div className="search-container">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search products..."
// // // //           value={searchQuery}
// // // //           onChange={(e) => setSearchQuery(e.target.value)}
// // // //           className="search-input"
// // // //         />
// // // //         <button onClick={fetchProducts} className="load-button">Load Products</button>
// // // //       </div>

// // // //       {isLoading && <div className="loading">Loading...</div>}

// // // //       <ul className="product-list">
// // // //         {filteredProducts.map((product) => (
// // // //           <li className="product-card" key={product.id}>
// // // //             <img
// // // //               src={product.image || 'https://via.placeholder.com/150'}
// // // //               alt={product.product_name}
// // // //               className="product-image"
// // // //             />
// // // //             <div className="card-details">
// // // //               <h3 className="product-title">{product.product_name}</h3>
// // // //               <p className="product-type">Type: {product.product_type}</p>
// // // //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// // // //               <p className="product-tax">Tax: {product.tax}%</p>
// // // //             </div>

// // // //             {/* Heart Icon for Favorite */}
// // // //             <div
// // // //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// // // //               onClick={() => toggleFavorite(product.id)}
// // // //             >
// // // //               ❤️
// // // //             </div>
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;
// // // import React, { useState, useEffect } from 'react';
// // // import './App.css';

// // // function App() {
// // //   const [products, setProducts] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [favorites, setFavorites] = useState([]);

// // //   // Fetch products from API
// // //   const fetchProducts = async () => {
// // //     setIsLoading(true);
// // //     try {
// // //       const response = await fetch('https://app.getswipe.in/api/public/get');
// // //       const data = await response.json();
// // //       setProducts(data);
// // //     } catch (error) {
// // //       console.error('Error fetching products:', error);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Load favorites from localStorage
// // //   useEffect(() => {
// // //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// // //     setFavorites(savedFavorites);
// // //   }, []);

// // //   // Save favorites to localStorage
// // //   useEffect(() => {
// // //     localStorage.setItem('favorites', JSON.stringify(favorites));
// // //   }, [favorites]);

// // //   // Toggle favorite status for a product
// // //   const toggleFavorite = (productId) => {
// // //     setFavorites((prevFavorites) => {
// // //       const isFavorite = prevFavorites.includes(productId);
// // //       if (isFavorite) {
// // //         return prevFavorites.filter((id) => id !== productId);
// // //       } else {
// // //         return [...prevFavorites, productId];
// // //       }
// // //     });
// // //   };

// // //   // Filter and sort products
// // //   const filteredProducts = products
// // //     .filter((product) =>
// // //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// // //     )
// // //     .sort((a, b) => {
// // //       const isAFavorite = favorites.includes(a.id);
// // //       const isBFavorite = favorites.includes(b.id);
// // //       if (isAFavorite && !isBFavorite) return -1;
// // //       if (!isAFavorite && isBFavorite) return 1;
// // //       return 0;
// // //     });

// // //   return (
// // //     <div className="App">
// // //       <h1 className="title">Product List</h1>

// // //       {/* Search and Load Button */}
// // //       <div className="search-container">
// // //         <input
// // //           type="text"
// // //           placeholder="Search products..."
// // //           value={searchQuery}
// // //           onChange={(e) => setSearchQuery(e.target.value)}
// // //           className="search-input"
// // //         />
// // //         <button onClick={fetchProducts} className="load-button">Load Products</button>
// // //       </div>

// // //       {isLoading && <div className="loading">Loading...</div>}

// // //       <ul className="product-list">
// // //         {filteredProducts.map((product) => (
// // //           <li className="product-card" key={product.id}>
// // //             <img
// // //               src={product.image || 'https://via.placeholder.com/150'}
// // //               alt={product.product_name}
// // //               className="product-image"
// // //             />
// // //             <div className="card-details">
// // //               <h3 className="product-title">{product.product_name}</h3>
// // //               <p className="product-type">Type: {product.product_type}</p>
// // //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// // //               <p className="product-tax">Tax: {product.tax}%</p>
// // //             </div>

// // //             {/* Heart Icon for Favorite */}
// // //             <div
// // //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// // //               onClick={() => toggleFavorite(product.id)}
// // //             >
// // //               ❤️
// // //             </div>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [favorites, setFavorites] = useState([]);

// //   // Fetch products from API
// //   const fetchProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://app.getswipe.in/api/public/get');
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Load favorites from localStorage
// //   useEffect(() => {
// //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// //     setFavorites(savedFavorites);
// //   }, []);

// //   // Save favorites to localStorage
// //   useEffect(() => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   }, [favorites]);

// //   // Toggle favorite status for a product
// //   const toggleFavorite = (productId) => {
// //     setFavorites((prevFavorites) => {
// //       const isFavorite = prevFavorites.includes(productId);
// //       if (isFavorite) {
// //         return prevFavorites.filter((id) => id !== productId);
// //       } else {
// //         return [...prevFavorites, productId];
// //       }
// //     });
// //   };

// //   // Filter and sort products
// //   const filteredProducts = products
// //     .filter((product) =>
// //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .sort((a, b) => {
// //       const isAFavorite = favorites.includes(a.id);
// //       const isBFavorite = favorites.includes(b.id);
// //       if (isAFavorite && !isBFavorite) return -1;
// //       if (!isAFavorite && isBFavorite) return 1;
// //       return 0;
// //     });

// //   return (
// //     <div className="App">
// //       <h1 className="title">Product List</h1>

// //       {/* Search and Load Button */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="search-input"
// //         />
// //         <button onClick={fetchProducts} className="load-button">Load Products</button>
// //       </div>

// //       {isLoading && <div className="loading">Loading...</div>}

// //       <ul className="product-list">
// //         {filteredProducts.map((product) => (
// //           <li className="product-card" key={product.id}>
// //             <img
// //               src={product.image || 'https://via.placeholder.com/150'}
// //               alt={product.product_name}
// //               className="product-image"
// //             />
// //             <div className="card-details">
// //               <h3 className="product-title">{product.product_name}</h3>
// //               <p className="product-type">Type: {product.product_type}</p>
// //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// //               <p className="product-tax">Tax: {product.tax}%</p>
// //             </div>

// //             {/* Heart Icon for Favorite */}
// //             <div
// //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// //               onDoubleClick={() => toggleFavorite(product.id)}
// //             >
// //               ❤️
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [favorites, setFavorites] = useState([]);

// //   // Fetch products from API
// //   const fetchProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://app.getswipe.in/api/public/get');
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Load favorites from localStorage
// //   useEffect(() => {
// //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// //     setFavorites(savedFavorites);
// //   }, []);

// //   // Save favorites to localStorage
// //   useEffect(() => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   }, [favorites]);

// //   // Toggle favorite status for a product
// //   const toggleFavorite = (productId) => {
// //     setFavorites((prevFavorites) => {
// //       const isFavorite = prevFavorites.includes(productId);
// //       if (isFavorite) {
// //         // Remove from favorites if already favorited
// //         return prevFavorites.filter((id) => id !== productId);
// //       } else {
// //         // Add to favorites if not already favorited
// //         return [...prevFavorites, productId];
// //       }
// //     });
// //   };

// //   // Filter and sort products
// //   const filteredProducts = products
// //     .filter((product) =>
// //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .sort((a, b) => {
// //       const isAFavorite = favorites.includes(a.id);
// //       const isBFavorite = favorites.includes(b.id);
// //       // Ensure favorited products appear first
// //       if (isAFavorite && !isBFavorite) return -1;
// //       if (!isAFavorite && isBFavorite) return 1;
// //       return 0;
// //     });

// //   return (
// //     <div className="App">
// //       <h1 className="title">Product List</h1>

// //       {/* Search and Load Button */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="search-input"
// //         />
// //         <button onClick={fetchProducts} className="load-button">
// //           Load Products
// //         </button>
// //       </div>

// //       {isLoading && <div className="loading">Loading...</div>}

// //       <ul className="product-list">
// //         {filteredProducts.map((product) => (
// //           <li className="product-card" key={product.id}>
// //             <img
// //               src={product.image || 'https://via.placeholder.com/150'}
// //               alt={product.product_name}
// //               className="product-image"
// //             />
// //             <div className="card-details">
// //               <h3 className="product-title">{product.product_name}</h3>
// //               <p className="product-type">Type: {product.product_type}</p>
// //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// //               <p className="product-tax">Tax: {product.tax}%</p>
// //             </div>

// //             {/* Heart Icon for Favorite */}
// //             <div
// //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// //               onDoubleClick={() => toggleFavorite(product.id)}
// //             >
// //               ❤️
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;

// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [favorites, setFavorites] = useState([]);

// //   // Fetch products from API
// //   const fetchProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://app.getswipe.in/api/public/get');
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Load favorites from localStorage
// //   useEffect(() => {
// //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// //     setFavorites(savedFavorites);
// //   }, []);

// //   // Save favorites to localStorage
// //   useEffect(() => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   }, [favorites]);

// //   // Toggle favorite status for a product
// //   const toggleFavorite = (productId) => {
// //     setFavorites((prevFavorites) => {
// //       const isFavorite = prevFavorites.includes(productId);
// //       if (isFavorite) {
// //         // Remove from favorites if already favorited
// //         return prevFavorites.filter((id) => id !== productId);
// //       } else {
// //         // Add to favorites if not already favorited
// //         return [...prevFavorites, productId];
// //       }
// //     });
// //   };

// //   // Filter and sort products
// //   const filteredProducts = products
// //     .filter((product) =>
// //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .sort((a, b) => {
// //       const isAFavorite = favorites.includes(a.id);
// //       const isBFavorite = favorites.includes(b.id);
// //       // Ensure favorited products appear first
// //       if (isAFavorite && !isBFavorite) return -1;
// //       if (!isAFavorite && isBFavorite) return 1;
// //       return 0;
// //     });

// //   return (
// //     <div className="App">
// //       <h1 className="title">Product List</h1>

// //       {/* Search and Load Button */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="search-input"
// //         />
// //         <button onClick={fetchProducts} className="load-button">
// //           Load Products
// //         </button>
// //       </div>

// //       {isLoading && <div className="loading">Loading...</div>}

// //       <ul className="product-list">
// //         {filteredProducts.map((product) => (
// //           <li className="product-card" key={product.id}>
// //             <img
// //               src={product.image || 'https://via.placeholder.com/150'}
// //               alt={product.product_name}
// //               className="product-image"
// //             />
// //             <div className="card-details">
// //               <h3 className="product-title">{product.product_name}</h3>
// //               <p className="product-type">Type: {product.product_type}</p>
// //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// //               <p className="product-tax">Tax: {product.tax}%</p>
// //             </div>

// //             {/* Heart Icon for Favorite */}
// //             <div
// //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// //               onClick={() => toggleFavorite(product.id)}  // Changed to onClick
// //             >
// //               ❤️
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [favorites, setFavorites] = useState([]);

// //   // Fetch products from the API
// //   const fetchProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://app.getswipe.in/api/public/get');
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Load favorites from localStorage when the app starts
// //   useEffect(() => {
// //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// //     setFavorites(savedFavorites);
// //   }, []);

// //   // Save favorites to localStorage whenever favorites change
// //   useEffect(() => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   }, [favorites]);

// //   // Toggle favorite status for a product
// //   const toggleFavorite = (productId) => {
// //     setFavorites((prevFavorites) => {
// //       const isFavorite = prevFavorites.includes(productId);
// //       if (isFavorite) {
// //         // Remove from favorites if already favorited
// //         return prevFavorites.filter((id) => id !== productId);
// //       } else {
// //         // Add to favorites if not already favorited
// //         return [...prevFavorites, productId];
// //       }
// //     });
// //   };

// //   // Filter and sort products: show favorites first
// //   const filteredProducts = products
// //     .filter((product) =>
// //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .sort((a, b) => {
// //       const isAFavorite = favorites.includes(a.id);
// //       const isBFavorite = favorites.includes(b.id);
// //       if (isAFavorite && !isBFavorite) return -1;
// //       if (!isAFavorite && isBFavorite) return 1;
// //       return 0;
// //     });

// //   return (
// //     <div className="App">
// //       <h1 className="title">Product List</h1>

// //       {/* Search and Load Button */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="search-input"
// //         />
// //         <button onClick={fetchProducts} className="load-button">
// //           Load Products
// //         </button>
// //       </div>

// //       {isLoading && <div className="loading">Loading...</div>}

// //       <ul className="product-list">
// //         {filteredProducts.map((product) => (
// //           <li className="product-card" key={product.id}>
// //             <img
// //               src={product.image || 'https://via.placeholder.com/150'}
// //               alt={product.product_name}
// //               className="product-image"
// //             />
// //             <div className="card-details">
// //               <h3 className="product-title">{product.product_name}</h3>
// //               <p className="product-type">Type: {product.product_type}</p>
// //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// //               <p className="product-tax">Tax: {product.tax}%</p>
// //             </div>

// //             {/* Heart Icon for Favorite */}
// //             <div
// //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// //               onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
// //             >
// //               ❤️
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [favorites, setFavorites] = useState([]);
// //   const [clickTimeout, setClickTimeout] = useState(null);

// //   // Fetch products from the API
// //   const fetchProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://app.getswipe.in/api/public/get');
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Load favorites from localStorage when the app starts
// //   useEffect(() => {
// //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// //     setFavorites(savedFavorites);
// //   }, []);

// //   // Save favorites to localStorage whenever favorites change
// //   useEffect(() => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   }, [favorites]);

// //   // Toggle favorite status for a product
// //   const toggleFavorite = (productId) => {
// //     setFavorites((prevFavorites) => {
// //       const isFavorite = prevFavorites.includes(productId);
// //       if (isFavorite) {
// //         // Remove from favorites if already favorited
// //         return prevFavorites.filter((id) => id !== productId);
// //       } else {
// //         // Add to favorites if not already favorited
// //         return [...prevFavorites, productId];
// //       }
// //     });
// //   };

// //   // Handle double-click detection
// //   const handleDoubleClick = (productId) => {
// //     if (clickTimeout) clearTimeout(clickTimeout); // Clear previous click timeout

// //     // Set a timeout for double-click detection (300ms is standard)
// //     const newTimeout = setTimeout(() => {
// //       toggleFavorite(productId); // If it's a single click (no double click detected)
// //     }, 300);

// //     setClickTimeout(newTimeout);
// //   };

// //   // Filter and sort products: show favorites first
// //   const filteredProducts = products
// //     .filter((product) =>
// //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .sort((a, b) => {
// //       const isAFavorite = favorites.includes(a.id);
// //       const isBFavorite = favorites.includes(b.id);
// //       if (isAFavorite && !isBFavorite) return -1;
// //       if (!isAFavorite && isBFavorite) return 1;
// //       return 0;
// //     });

// //   return (
// //     <div className="App">
// //       <h1 className="title">Product List</h1>

// //       {/* Search and Load Button */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="search-input"
// //         />
// //         <button onClick={fetchProducts} className="load-button">
// //           Load Products
// //         </button>
// //       </div>

// //       {isLoading && <div className="loading">Loading...</div>}

// //       <ul className="product-list">
// //         {filteredProducts.map((product) => (
// //           <li className="product-card" key={product.id}>
// //             <img
// //               src={product.image || 'https://via.placeholder.com/150'}
// //               alt={product.product_name}
// //               className="product-image"
// //             />
// //             <div className="card-details">
// //               <h3 className="product-title">{product.product_name}</h3>
// //               <p className="product-type">Type: {product.product_type}</p>
// //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// //               <p className="product-tax">Tax: {product.tax}%</p>
// //             </div>

// //             {/* Heart Icon for Favorite with Double Click */}
// //             <div
// //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// //               onClick={() => handleDoubleClick(product.id)}  // Handle double-click
// //             >
// //               ❤️
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // function App() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [favorites, setFavorites] = useState([]);
// //   const [clickTimeout, setClickTimeout] = useState(null);

// //   // Fetch products from the API
// //   const fetchProducts = async () => {
// //     setIsLoading(true);
// //     try {
// //       const response = await fetch('https://app.getswipe.in/api/public/get');
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Load favorites from localStorage when the app starts
// //   useEffect(() => {
// //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
// //     setFavorites(savedFavorites);
// //   }, []);

// //   // Save favorites to localStorage whenever favorites change
// //   useEffect(() => {
// //     localStorage.setItem('favorites', JSON.stringify(favorites));
// //   }, [favorites]);

// //   // Toggle favorite status for a product
// //   const toggleFavorite = (productId) => {
// //     setFavorites((prevFavorites) => {
// //       const isFavorite = prevFavorites.includes(productId);
// //       if (isFavorite) {
// //         // Remove from favorites if already favorited
// //         return prevFavorites.filter((id) => id !== productId);
// //       } else {
// //         // Add to favorites if not already favorited
// //         return [...prevFavorites, productId];
// //       }
// //     });
// //   };

// //   // Handle double-click detection
// //   const handleDoubleClick = (productId) => {
// //     if (clickTimeout) clearTimeout(clickTimeout); // Clear previous click timeout

// //     // Set a timeout for double-click detection (300ms is standard)
// //     const newTimeout = setTimeout(() => {
// //       toggleFavorite(productId); // If it's a single click (no double click detected)
// //     }, 300);

// //     setClickTimeout(newTimeout);
// //   };

// //   // Filter and sort products: show favorites first
// //   const filteredProducts = products
// //     .filter((product) =>
// //       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .sort((a, b) => {
// //       const isAFavorite = favorites.includes(a.id);
// //       const isBFavorite = favorites.includes(b.id);
// //       if (isAFavorite && !isBFavorite) return -1;
// //       if (!isAFavorite && isBFavorite) return 1;
// //       return 0;
// //     });

// //   return (
// //     <div className="App">
// //       <h1 className="title">Product List</h1>

// //       {/* Search and Load Button */}
// //       <div className="search-container">
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //           className="search-input"
// //         />
// //         <button onClick={fetchProducts} className="load-button">
// //           Load Products
// //         </button>
// //       </div>

// //       {isLoading && <div className="loading">Loading...</div>}

// //       <ul className="product-list">
// //         {filteredProducts.map((product) => (
// //           <li className="product-card" key={product.id}>
// //             <img
// //               src={product.image || 'https://via.placeholder.com/150'}
// //               alt={product.product_name}
// //               className="product-image"
// //             />
// //             <div className="card-details">
// //               <h3 className="product-title">{product.product_name}</h3>
// //               <p className="product-type">Type: {product.product_type}</p>
// //               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
// //               <p className="product-tax">Tax: {product.tax}%</p>
// //             </div>

// //             {/* Heart Icon for Favorite with Double Click */}
// //             <div
// //               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
// //               onClick={() => handleDoubleClick(product.id)}  // Handle double-click
// //             >
// //               ❤️
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   // Fetch products from the API
//   const fetchProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://app.getswipe.in/api/public/get');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Load favorites from localStorage when the app starts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Save favorites to localStorage whenever favorites change
//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle favorite status for a product
//   const toggleFavorite = (productId) => {
//     setFavorites((prevFavorites) => {
//       const isFavorite = prevFavorites.includes(productId);
//       if (isFavorite) {
//         // Remove from favorites if already favorited
//         return prevFavorites.filter((id) => id !== productId);
//       } else {
//         // Add to favorites if not already favorited
//         return [...prevFavorites, productId];
//       }
//     });
//   };

//   // Filter and sort products: show favorites first
//   const filteredProducts = products
//     .filter((product) =>
//       product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       const isAFavorite = favorites.includes(a.id);
//       const isBFavorite = favorites.includes(b.id);
//       if (isAFavorite && !isBFavorite) return -1;
//       if (!isAFavorite && isBFavorite) return 1;
//       return 0;
//     });

//   return (
//     <div className="App">
//       <h1 className="title">Product List</h1>

//       {/* Search and Load Button */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={fetchProducts} className="load-button">
//           Load Products
//         </button>
//       </div>

//       {isLoading && <div className="loading">Loading...</div>}

//       <ul className="product-list">
//         {filteredProducts.map((product) => (
//           <li className="product-card" key={product.id}>
//             <img
//               src={product.image || 'https://via.placeholder.com/150'}
//               alt={product.product_name}
//               className="product-image"
//             />
//             <div className="card-details">
//               <h3 className="product-title">{product.product_name}</h3>
//               <p className="product-type">Type: {product.product_type}</p>
//               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//               <p className="product-tax">Tax: {product.tax}%</p>
//             </div>

//             {/* Heart Icon for Favorite */}
//             <div
//               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//               onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//             >
//               {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   // Fetch products from the API
//   const fetchProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://app.getswipe.in/api/public/get');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Load favorites from localStorage when the app starts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Save favorites to localStorage whenever favorites change
//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle favorite status for a product
//   const toggleFavorite = (productId) => {
//     setFavorites((prevFavorites) => {
//       const isFavorite = prevFavorites.includes(productId);
//       if (isFavorite) {
//         // Remove from favorites if already favorited
//         return prevFavorites.filter((id) => id !== productId);
//       } else {
//         // Add to favorites if not already favorited
//         return [...prevFavorites, productId];
//       }
//     });
//   };

//   // Filter and sort products: show favorites first
//   const filteredProducts = products.filter((product) =>
//     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const favoriteProducts = filteredProducts.filter((product) =>
//     favorites.includes(product.id)
//   );

//   const nonFavoriteProducts = filteredProducts.filter((product) =>
//     !favorites.includes(product.id)
//   );

//   return (
//     <div className="App">
//       <h1 className="title">Product List</h1>

//       {/* Search and Load Button */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={fetchProducts} className="load-button">
//           Load Products
//         </button>
//       </div>

//       {isLoading && <div className="loading">Loading...</div>}

//       {/* Favorited Products */}
//       <h2 className="favorites-title">Favorited Products</h2>
//       <ul className="product-list">
//         {favoriteProducts.length > 0 ? (
//           favoriteProducts.map((product) => (
//             <li className="product-card" key={product.id}>
//               <img
//                 src={product.image || 'https://via.placeholder.com/150'}
//                 alt={product.product_name}
//                 className="product-image"
//               />
//               <div className="card-details">
//                 <h3 className="product-title">{product.product_name}</h3>
//                 <p className="product-type">Type: {product.product_type}</p>
//                 <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//                 <p className="product-tax">Tax: {product.tax}%</p>
//               </div>

//               {/* Heart Icon for Favorite */}
//               <div
//                 className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//                 onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//               >
//                 {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
//               </div>
//             </li>
//           ))
//         ) : (
//           <p>No favorite products yet.</p>
//         )}
//       </ul>

//       {/* Non-Favorited Products */}
//       <h2 className="favorites-title">All Products</h2>
//       <ul className="product-list">
//         {nonFavoriteProducts.map((product) => (
//           <li className="product-card" key={product.id}>
//             <img
//               src={product.image || 'https://via.placeholder.com/150'}
//               alt={product.product_name}
//               className="product-image"
//             />
//             <div className="card-details">
//               <h3 className="product-title">{product.product_name}</h3>
//               <p className="product-type">Type: {product.product_type}</p>
//               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//               <p className="product-tax">Tax: {product.tax}%</p>
//             </div>

//             {/* Heart Icon for Favorite */}
//             <div
//               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//               onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//             >
//               {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   // Fetch products from the API
//   const fetchProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://app.getswipe.in/api/public/get');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Load favorites from localStorage when the app starts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Save favorites to localStorage whenever favorites change
//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle favorite status for a product
//   const toggleFavorite = (productId) => {
//     setFavorites((prevFavorites) => {
//       const isFavorite = prevFavorites.includes(productId);
//       if (isFavorite) {
//         // Remove from favorites if already favorited
//         return prevFavorites.filter((id) => id !== productId);
//       } else {
//         // Add to favorites if not already favorited
//         return [...prevFavorites, productId];
//       }
//     });
//   };

//   // Filter and sort products: show favorites first
//   const filteredProducts = products.filter((product) =>
//     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const favoriteProducts = filteredProducts.filter((product) =>
//     favorites.includes(product.id)
//   );

//   const nonFavoriteProducts = filteredProducts.filter((product) =>
//     !favorites.includes(product.id)
//   );

//   return (
//     <div className="App">
//       <h1 className="title">Product List</h1>

//       {/* Search and Load Button */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={fetchProducts} className="load-button">
//           Load Products
//         </button>
//       </div>

//       {isLoading && <div className="loading">Loading...</div>}

//       {/* Favorited Products */}
//       <h2 className="favorites-title">Favorited Products</h2>
//       <ul className="product-list">
//         {favoriteProducts.length > 0 ? (
//           favoriteProducts.map((product) => (
//             <li className="product-card" key={product.id}>
//               <img
//                 src={product.image || 'https://via.placeholder.com/150'}
//                 alt={product.product_name}
//                 className="product-image"
//               />
//               <div className="card-details">
//                 <h3 className="product-title">{product.product_name}</h3>
//                 <p className="product-type">Type: {product.product_type}</p>
//                 <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//                 <p className="product-tax">Tax: {product.tax}%</p>
//               </div>

//               {/* Heart Icon Button */}
//               <button
//                 className={`heart-button ${favorites.includes(product.id) ? 'favorited' : ''}`}
//                 onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//               >
//                 {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
//                 {favorites.includes(product.id) ? ' Unfavorite' : ' Favorite'}
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>No favorite products yet.</p>
//         )}
//       </ul>

//       {/* Non-Favorited Products */}
//       <h2 className="favorites-title">All Products</h2>
//       <ul className="product-list">
//         {nonFavoriteProducts.map((product) => (
//           <li className="product-card" key={product.id}>
//             <img
//               src={product.image || 'https://via.placeholder.com/150'}
//               alt={product.product_name}
//               className="product-image"
//             />
//             <div className="card-details">
//               <h3 className="product-title">{product.product_name}</h3>
//               <p className="product-type">Type: {product.product_type}</p>
//               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//               <p className="product-tax">Tax: {product.tax}%</p>
//             </div>

//             {/* Heart Icon Button */}
//             <button
//               className={`heart-button ${favorites.includes(product.id) ? 'favorited' : ''}`}
//               onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//             >
//               {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
//               {favorites.includes(product.id) ? ' Unfavorite' : ' Favorite'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   // Fetch products from the API
//   const fetchProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://app.getswipe.in/api/public/get');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
// //     }
// //   };

//   // Load favorites from localStorage when the app starts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Save favorites to localStorage whenever favorites change
//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle favorite status for a product
//   const toggleFavorite = (productId) => {
//     setFavorites((prevFavorites) => {
//       const isFavorite = prevFavorites.includes(productId);
//       if (isFavorite) {
//         // Remove from favorites if already favorited
//         return prevFavorites.filter((id) => id !== productId);
//       } else {
//         // Add to favorites if not already favorited
//         return [...prevFavorites, productId];
//       }
//     });
//   };

//   // Filter and sort products: show favorites first
//   const filteredProducts = products.filter((product) =>
//     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const favoriteProducts = filteredProducts.filter((product) =>
//     favorites.includes(product.id)
//   );

//   const nonFavoriteProducts = filteredProducts.filter((product) =>
//     !favorites.includes(product.id)
//   );

//   return (
//     <div className="App">
//       <h1 className="title">Product List</h1>

//       {/* Search and Load Button */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={fetchProducts} className="load-button">
//           Load Products
//         </button>
//       </div>

//       {isLoading && <div className="loading">Loading...</div>}

//       {/* Favorited Products */}
//       <h2 className="favorites-title">Favorited Products</h2>
//       <ul className="product-list">
//         {favoriteProducts.length > 0 ? (
//           favoriteProducts.map((product) => (
//             <li className="product-card" key={product.id}>
//               <img
//                 src={product.image || 'https://via.placeholder.com/150'}
//                 alt={product.product_name}
//                 className="product-image"
//               />
//               <div className="card-details">
//                 <h3 className="product-title">{product.product_name}</h3>
//                 <p className="product-type">Type: {product.product_type}</p>
//                 <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//                 <p className="product-tax">Tax: {product.tax}%</p>
//               </div>

//               {/* Heart Icon to mark as Favorite */}
//               <div
//                 className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//                 onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//               >
//                 {favorites.includes(product.id) ? '❤️' : '🤍'}
//               </div>
//             </li>
//           ))
//         ) : (
//           <p>No favorite products yet.</p>
//         )}
//       </ul>

//       {/* Non-Favorited Products */}
//       <h2 className="favorites-title">All Products</h2>
//       <ul className="product-list">
//         {nonFavoriteProducts.map((product) => (
//           <li className="product-card" key={product.id}>
//             <img
//               src={product.image || 'https://via.placeholder.com/150'}
//               alt={product.product_name}
//               className="product-image"
//             />
//             <div className="card-details">
//               <h3 className="product-title">{product.product_name}</h3>
//               <p className="product-type">Type: {product.product_type}</p>
//               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//               <p className="product-tax">Tax: {product.tax}%</p>
//             </div>

//             {/* Heart Icon to mark as Favorite */}
//             <div
//               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//               onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
//             >
//               {favorites.includes(product.id) ? '❤️' : '🤍'}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [favorites, setFavorites] = useState([]);

//   // Fetch products from the API
//   const fetchProducts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://app.getswipe.in/api/public/get');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Load favorites from localStorage when the app starts
//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   // Save favorites to localStorage whenever favorites change
//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle favorite status for a product
//   const toggleFavorite = (productId) => {
//     setFavorites((prevFavorites) => {
//       const isFavorite = prevFavorites.includes(productId);
//       if (isFavorite) {
//         // Remove from favorites if already favorited
//         return prevFavorites.filter((id) => id !== productId);
//       } else {
//         // Add to favorites if not already favorited
//         return [...prevFavorites, productId];
//       }
//     });
//   };

//   // Handle double-click event to toggle favorite status
//   const handleDoubleClick = (productId) => {
//     toggleFavorite(productId);
//   };

//   // Filter and sort products: show favorites first
//   const filteredProducts = products.filter((product) =>
//     product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const favoriteProducts = filteredProducts.filter((product) =>
//     favorites.includes(product.id)
//   );

//   const nonFavoriteProducts = filteredProducts.filter((product) =>
//     !favorites.includes(product.id)
//   );

//   return (
//     <div className="App">
//       <h1 className="title">Product List</h1>

//       {/* Search and Load Button */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={fetchProducts} className="load-button">
//           Load Products
//         </button>
//       </div>

//       {isLoading && <div className="loading">Loading...</div>}

//       {/* Favorited Products */}
//       <h2 className="favorites-title">Favorited Products</h2>
//       <ul className="product-list">
//         {favoriteProducts.length > 0 ? (
//           favoriteProducts.map((product) => (
//             <li className="product-card" key={product.id}>
//               <img
//                 src={product.image || 'https://via.placeholder.com/150'}
//                 alt={product.product_name}
//                 className="product-image"
//               />
//               <div className="card-details">
//                 <h3 className="product-title">{product.product_name}</h3>
//                 <p className="product-type">Type: {product.product_type}</p>
//                 <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//                 <p className="product-tax">Tax: {product.tax}%</p>
//               </div>

//               {/* Heart Icon to mark as Favorite */}
//               <div
//                 className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//                 onDoubleClick={() => handleDoubleClick(product.id)}  // Double-click to toggle favorite
//               >
//                 {favorites.includes(product.id) ? '❤️' : '🤍'}
//               </div>
//             </li>
//           ))
//         ) : (
//           <p>No favorite products yet.</p>
//         )}
//       </ul>

//       {/* Non-Favorited Products */}
//       <h2 className="favorites-title">All Products</h2>
//       <ul className="product-list">
//         {nonFavoriteProducts.map((product) => (
//           <li className="product-card" key={product.id}>
//             <img
//               src={product.image || 'https://via.placeholder.com/150'}
//               alt={product.product_name}
//               className="product-image"
//             />
//             <div className="card-details">
//               <h3 className="product-title">{product.product_name}</h3>
//               <p className="product-type">Type: {product.product_type}</p>
//               <p className="product-price">Price: ${product.price.toFixed(2)}</p>
//               <p className="product-tax">Tax: {product.tax}%</p>
//             </div>

//             {/* Heart Icon to mark as Favorite */}
//             <div
//               className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
//               onDoubleClick={() => handleDoubleClick(product.id)}  // Double-click to toggle favorite
//             >
//               {favorites.includes(product.id) ? '❤️' : '🤍'}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Fetch products from the API
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://app.getswipe.in/api/public/get');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load favorites from localStorage when the app starts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite status for a product
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(productId);
      if (isFavorite) {
        // Remove from favorites if already favorited
        return prevFavorites.filter((id) => id !== productId);
      } else {
        // Add to favorites if not already favorited
        return [...prevFavorites, productId];
      }
    });
  };

  // Filter and sort products: show favorites first
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favoriteProducts = filteredProducts.filter((product) =>
    favorites.includes(product.id)
  );

  const nonFavoriteProducts = filteredProducts.filter((product) =>
    !favorites.includes(product.id)
  );

  return (
    <div className="App">
      <h1 className="title">Product List</h1>

      {/* Search and Load Button */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={fetchProducts} className="load-button">
          Load Products
        </button>
      </div>

      {isLoading && <div className="loading">Loading...</div>}

      {/* Favorited Products */}
      <h2 className="favorites-title">Favorited Products</h2>
      <ul className="product-list">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <li className="product-card" key={product.id}>
              <img
                src={product.image || 'https://via.placeholder.com/150'}
                alt={product.product_name}
                className="product-image"
              />
              <div className="card-details">
                <h3 className="product-title">{product.product_name}</h3>
                <p className="product-type">Type: {product.product_type}</p>
                <p className="product-price">Price: ${product.price.toFixed(2)}</p>
                <p className="product-tax">Tax: {product.tax}%</p>
              </div>

              {/* Heart Icon for Favorite */}
              <div
                className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
              >
                {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
              </div>
            </li>
          ))
        ) : (
          <p>No favorite products yet.</p>
        )}
      </ul>

      {/* Non-Favorited Products */}
      <h2 className="favorites-title">All Products</h2>
      <ul className="product-list">
        {nonFavoriteProducts.map((product) => (
          <li className="product-card" key={product.id}>
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.product_name}
              className="product-image"
            />
            <div className="card-details">
              <h3 className="product-title">{product.product_name}</h3>
              <p className="product-type">Type: {product.product_type}</p>
              <p className="product-price">Price: ${product.price.toFixed(2)}</p>
              <p className="product-tax">Tax: {product.tax}%</p>
            </div>

            {/* Heart Icon for Favorite */}
            <div
              className={`heart-icon ${favorites.includes(product.id) ? 'favorited' : ''}`}
              onClick={() => toggleFavorite(product.id)}  // Toggle favorite on click
            >
              {favorites.includes(product.id) ? '❤️' : '🤍'}  {/* Red heart when favorited */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
