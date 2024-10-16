import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const FeedPage = () => {
  // Dummy data for items (this will be fetched in a real app)
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('datePosted');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    document.title = 'Browse - Parsim';
  });

  // Fetch items from backend (mocked with useEffect for now)
  useEffect(() => {
    async function fetchItems() {
      try {
        // Simulate a backend call
        const response = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve([
                { id: 1, title: 'Vintage Adidas T-shirt', price: 30, condition: 'Used', size:'S', distance: 4, image: 'adidas.jpg', datePosted: '2024-10-01' },
                { id: 2, title: 'Arcteryx Hat slate gray', price: 50, condition: 'New', size:'M', distance: 0.7, image: 'arcteryx.jpg', datePosted: '2024-10-05' },
                { id: 3, title: "Levi's 502 Jeans", price: 45, condition: 'Used', size:'32/34', distance: 1.1, image: 'jeans.jpg', datePosted: '2024-10-15' },
                { id: 4, title: 'Stussy x Irie Hoodie', price: 130, condition: 'Used', size:'L', distance: 2.3, image: 'stussy.jpg', datePosted: '2024-09-30' },
                // Add more items
              ]),
            1000
          )
        );
        setItems(response);
        setFilteredItems(response);
        setLoading(false);
      } catch (err) {
        setError('Failed to load items');
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  // Handle search query
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle sorting
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // Handle price range change
  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split('-').map(Number);
    setPriceRange([min, max]);
  };

  // Filter and sort items when filters or search query change
  useEffect(() => {
    let updatedItems = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        item.price >= priceRange[0] &&
        item.price <= priceRange[1]
    );

    if (sortBy === 'priceLowHigh') {
      updatedItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighLow') {
      updatedItems.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(updatedItems);
  }, [searchQuery, priceRange, sortBy, items]);

  // Handle pagination
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">For You</h1>

      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for items"
          className="border p-2 rounded-md"
        />
        <select value={sortBy} onChange={handleSortChange} className="border p-2 rounded-md">
          <option value="datePosted">Sort by Date</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
        <select onChange={handlePriceRangeChange} className="border p-2 rounded-md">
          <option value="0-1000">All Prices</option>
          <option value="0-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-500">Over $100</option>
        </select>
      </div>

      {/* Items */}
      {loading && <p>Loading items...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paginatedItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 border rounded-md mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedPage;
