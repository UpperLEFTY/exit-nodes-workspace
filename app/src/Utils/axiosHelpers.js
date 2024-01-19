import axios from 'axios';

const getJWT = async () => {
  const currentUser = await Proxy.currentAuthenticatedUser();
  const userJWT = currentUser.signInUserSession.idToken.jwtToken;
  return userJWT;
};

const buildHeaders = (jwt) => {
  const headers = { Authorization: `Bearer ${jwt}`, Accept: 'application/json' };
  return headers;
};

export const cloudwatchLogError = async (error) => {
  const options = {
    method: 'POST',
    headers: buildHeaders(await getJWT()),
    data: { error },
    url: `${process.env.REACT_APP_API_ENDPOINT_URL}/cloudwatchlog`
  };
  await axios(options);
};

// to use this helper pass in the jwt token, endpoint, and an object as data
const invokeAxios = async (options) => {
  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    await cloudwatchLogError(JSON.stringify(error));
    if (error.response) {
      return error.response;
    }
    if (error.request) {
      console.error(error);
      return error.request;
    }
    return error;
  }
};

const axiosPost = async (url, payload) => {
  const options = {
    method: 'POST',
    headers: buildHeaders(await getJWT()),
    data: payload,
    url
  };
  const axiosResponse = await invokeAxios(options);
  return axiosResponse;
};

const axiosPut = async (url, payload) => {
  const options = {
    method: 'PUT',
    headers: buildHeaders(await getJWT()),
    data: payload,
    url
  };
  const axiosResponse = await invokeAxios(options);
  return axiosResponse;
};

const axiosGet = async (url) => {
  const options = {
    method: 'GET',
    headers: buildHeaders(await getJWT()),
    url
  };
  const axiosResponse = await invokeAxios(options);
  return axiosResponse;
};

const axiosDelete = async (url) => {
  const options = {
    method: 'DELETE',
    headers: buildHeaders(await getJWT()),
    url
  };
  const axiosResponse = await invokeAxios(options);
  return axiosResponse;
};

export {
  axiosPost, axiosGet, buildHeaders, invokeAxios, axiosPut, axiosDelete
};
