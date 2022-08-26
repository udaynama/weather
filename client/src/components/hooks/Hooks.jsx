import { API } from "./api/Api";
import { useMutation } from 'react-query';

const updateDocuments = async (body) => {
    const res = await API.post('/weather-get',body);
     return await res.data;
  };

export default updateDocuments;
  
  // export const useUpdateDocuments = ( close) =>
  //   useMutation(updateDocuments, {
  //     onSuccess: () => {
  //       close();
  //       alert("Successfully  searched");
  //     },
  //     onError: () => {
  //       alert("Data Not Fount");
  //     },
  //   });