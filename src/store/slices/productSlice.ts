import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
  filter: string;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
  filter: 'all',
};

// Mock API call to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return [
    { id: 1, name: 'Minimal Watch', price: 199, category: 'accessories' },
    { id: 2, name: 'Clean Notebook', price: 29, category: 'stationery' },
    { id: 3, name: 'Simple Pen Set', price: 49, category: 'stationery' },
    { id: 4, name: 'Monochrome Bag', price: 159, category: 'accessories' },
    { id: 5, name: 'Basic Wallet', price: 79, category: 'accessories' },
    { id: 6, name: 'Plain T-Shirt', price: 39, category: 'clothing' },
    { id: 7, name: 'Essential Mug', price: 19, category: 'home' },
    { id: 8, name: 'Clear Glass', price: 15, category: 'home' },
  ];
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { setFilter } = productSlice.actions;
export default productSlice.reducer;
