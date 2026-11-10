import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Get all available products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await api.get("/products", {
        params: filters,
      });

      return Array.isArray(response.data)
        ? response.data
        : response.data.products || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch products",
      );
    }
  },
);

// Get products belonging to the logged-in user
export const fetchMyProducts = createAsyncThunk(
  "products/fetchMyProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await api.get("/products/my-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return Array.isArray(response.data)
        ? response.data
        : response.data.products || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch your listings",
      );
    }
  },
);

// Create product
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (productData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await api.post("/products", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.product || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create product",
      );
    }
  },
);

// Update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await api.put(`/products/${id}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.product || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update product",
      );
    }
  },
);

// Delete product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product",
      );
    }
  },
);

const initialState = {
  items: [],
  myProducts: [],

  productsLoading: false,
  myProductsLoading: false,
  submitLoading: false,
  deletingId: null,

  productsError: null,
  myProductsError: null,
  submitError: null,

  successMessage: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    clearProductMessage: (state) => {
      state.successMessage = null;
      state.submitError = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch available products
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoading = true;
        state.productsError = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productsLoading = false;
        state.productsError = action.payload;
      })

      // Fetch my listings
      .addCase(fetchMyProducts.pending, (state) => {
        state.myProductsLoading = true;
        state.myProductsError = null;
        state.myProducts = [];
      })
      .addCase(fetchMyProducts.fulfilled, (state, action) => {
        state.myProductsLoading = false;
        state.myProducts = action.payload;
      })
      .addCase(fetchMyProducts.rejected, (state, action) => {
        state.myProductsLoading = false;
        state.myProductsError = action.payload;
      })

      // Create product
      .addCase(createProduct.pending, (state) => {
        state.submitLoading = true;
        state.submitError = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.submitLoading = false;

        const product = action.payload;

        if (product?._id) {
          state.myProducts.unshift(product);
        }

        state.successMessage = "Product created successfully";
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.submitLoading = false;
        state.submitError = action.payload;
      })

      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.submitLoading = true;
        state.submitError = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.submitLoading = false;

        const product = action.payload;

        if (product?._id) {
          state.myProducts = state.myProducts.map((item) =>
            item._id === product._id ? product : item,
          );

          state.items = state.items.map((item) =>
            item._id === product._id ? product : item,
          );
        }

        state.successMessage = "Product updated successfully";
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.submitLoading = false;
        state.submitError = action.payload;
      })

      // Delete product
      .addCase(deleteProduct.pending, (state, action) => {
        state.deletingId = action.meta.arg;
        state.submitError = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deletingId = null;

        const deletedId = action.payload;

        state.myProducts = state.myProducts.filter(
          (item) => item._id !== deletedId,
        );

        state.items = state.items.filter((item) => item._id !== deletedId);

        state.successMessage = "Product deleted successfully";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deletingId = null;
        state.submitError = action.payload;
      });
  },
});

export const { clearProductMessage } = productSlice.actions;

export default productSlice.reducer;
