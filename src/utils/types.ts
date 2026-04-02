// types.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
}

export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
  statusCode: number;
};

export type PaginatedResponse<T> = ApiResponse<T[]> & {
  total: number;
  page: number;
  limit: number;
};

export type ErrorResponse = {
  message: string;
  error: string;
  statusCode: number;
};

export type Theme = 'light' | 'dark' | 'system';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type SortDirection = 'asc' | 'desc';

export interface QueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortDirection?: SortDirection;
  search?: string;
  filter?: Record<string, string | number>;
}

export type Nullable<T> = T | null;