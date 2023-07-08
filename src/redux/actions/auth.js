import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const asyncLogin = createAsyncThunk(
  'asyncLogin',
  async (payload, {rejectWithValue}) => {
    try {
      const form = new URLSearchParams();
      form.append('email', payload.email);
      form.append('password', payload.password);
      const {data} = await http().post('/auth/login', form.toString());
      console.log(data);
      return data.results.token;
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        return rejectWithValue(message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  },
);

export const asyncRegister = createAsyncThunk(
  'asyncRegister',
  async (paylaod, {rejectWithValue}) => {
    try {
      const form = new URLSearchParams();
      console.log(paylaod);
      form.append('fullName', paylaod.fullName);
      form.append('email', paylaod.email);
      form.append('password', paylaod.password);
      form.append('confirmPassword', paylaod.confirmPassword);

      const {data} = await http().post('/auth/register', form.toString());
      return data.results.token;
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        return rejectWithValue(message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  },
);

export const asyncForgot = createAsyncThunk(
  'asyncForgot',
  async (paylaod, {rejectWithValue}) => {
    try {
      const form = new URLSearchParams();
      console.log(paylaod);
      form.append('email', paylaod.email);

      const {data} = await http().post('/auth/forgotPassword', form.toString());
      console.log(data);
      return data?.message;
    } catch (err) {
      const message = err?.response?.data?.message;
      console.log(message);
      if (message) {
        return rejectWithValue(message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  },
);

export const asyncResetPassword = createAsyncThunk(
  'asyncResetPassword',
  async (paylaod, {rejectWithValue}) => {
    try {
      const form = new URLSearchParams();
      console.log(paylaod);
      form.append('code', paylaod.code);
      form.append('email', paylaod.email);
      form.append('password', paylaod.password);
      form.append('confirmPassword', paylaod.confirmPassword);

      const {data} = await http().post('/auth/resetPassword', form.toString());
      return data?.message;
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        return rejectWithValue(message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  },
);
