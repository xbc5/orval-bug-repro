/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * requestBody bug repro
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export type PostFooBody = {
  bar?: number;
};





  export const postFoo = <TData = AxiosResponse<unknown>>(
    postFooBody: PostFooBody, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/foo`,
      postFooBody,options
    );
  }

export type PostFooResult = AxiosResponse<unknown>
