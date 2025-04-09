// const baseUrl = "http://82.29.161.36:2000";
const baseUrl = "http://192.168.43.212:2000";

const profileApi = `${baseUrl}/user/profile`;
const createSubdomain = `${baseUrl}/auth/create/subdomain`;
const checkDomain =`${baseUrl}/auth/check/domain`

export default {
  profileApi,
  createSubdomain,
  checkDomain,
};
