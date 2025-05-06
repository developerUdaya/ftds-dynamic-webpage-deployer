const baseUrl = "http://82.29.161.36:2000";
// const baseUrl = "http://192.168.0.18:2000";

const profileApi = `${baseUrl}/user/profile`;
const createSubdomain = `${baseUrl}/auth/create/subdomain`;
const checkDomain =`${baseUrl}/auth/check/domain`;
const website =`${baseUrl}/auth/website`;
const websiteCreate=`${baseUrl}/website/create`;

export default {
  profileApi,
  createSubdomain,
  checkDomain,
  website,
  websiteCreate,
};
