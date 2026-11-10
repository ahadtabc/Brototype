import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Checkout API
export const checkoutProducts = createAsyncThunk(
  "checkout/checkoutProducts",
  async (productIds, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await api.post(
        "/checkout",
        { productIds },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Checkout failed"
      );
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  message: null
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,

  reducers: {
    resetCheckout: (state) => {
      state.status = "idle";
      state.error = null;
      state.message = null;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkoutProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.message = null;
      })

      .addCase(checkoutProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
      })

      .addCase(checkoutProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const { resetCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;