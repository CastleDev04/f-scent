import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

const ProductFilter = ({ products, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [brands, setBrands] = useState([]);

  // Marcas únicas
  useEffect(() => {
    if (products?.length) {
      const uniqueBrands = [...new Set(products.map(p => p.brand))].filter(Boolean);
      setBrands(uniqueBrands);
    }
  }, [products]);

  // 🔥 FUNCIÓN CENTRAL DE FILTRADO
  const applyFilters = (term, brand) => {
    if (!products) return;

    let filtered = [...products];

    if (term.trim()) {
      const t = term.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(t) ||
        p.brand?.toLowerCase().includes(t) ||
        p.description?.toLowerCase().includes(t)
      );
    }

    if (brand !== 'all') {
      filtered = filtered.filter(p => p.brand === brand);
    }

    onFilterChange(filtered);
  };

  // Eventos
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    applyFilters(value, selectedBrand);
  };

  const handleBrandChange = (e) => {
    const value = e.target.value;
    setSelectedBrand(value);
    applyFilters(searchTerm, value);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('all');
    onFilterChange(products);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-beige-100 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center">

        <div className="lg:w-1/4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold">Filtrar productos</h3>
          </div>
        </div>

        <div className="lg:w-2/4 w-full relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar perfumes..."
            className="w-full pl-10 pr-4 py-3 border rounded-xl"
          />
        </div>

        <div className="lg:w-1/4 w-full">
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full px-4 py-3 border rounded-xl"
          >
            <option value="all">Todas las marcas</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      {(searchTerm || selectedBrand !== 'all') && (
        <div className="mt-4 text-right">
          <button
            onClick={handleClearFilters}
            className="text-sm text-gray-600 hover:text-black"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
