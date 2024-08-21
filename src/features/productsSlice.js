import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [
      { id: 1, name: 'Fiddle Leaf Fig', price: 29.99 },
      { id: 2, name: 'Snake Plant', price: 19.99 },
      // Agrega más productos según sea necesario
    ],
  },
  reducers: {},
});

export const selectProducts = (state) => state.products.items;
export default productsSlice.reducer;
