import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from '../utils/queries/get-all-products';

const getAllProducts = async (): Promise<any[]> => {
  const { data } = await fetchApi({ query: getAllProductsQuery });
  return data;
}

export default getAllProducts;
