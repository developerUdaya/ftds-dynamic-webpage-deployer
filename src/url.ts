// const baseUrl = "http://82.29.161.36:2000";
// const baseUrl = "http://192.168.0.25:2000";
const baseUrl='https://webapi.ftdigitalsolutions.org';

const profileApi = `${baseUrl}/user/profile`;
const createSubdomain = `${baseUrl}/auth/create/subdomain`;
const checkDomain =`${baseUrl}/auth/check/domain`;
const website =`${baseUrl}/auth/website`;
const websiteCreate=`${baseUrl}/website/create`;
const signUp=`${baseUrl}/signup`;
const signIn=`${baseUrl}/signin`;
const checkEmail=`${baseUrl}/auth/check/email`;
const sendOtp=`${baseUrl}/forgot/password`;
const verifyOtp=`${baseUrl}/reset/verify`;
const resetPassword=`${baseUrl}/reset/password`;
const signupOtpVerify=`${baseUrl}/signup/otp/verify`;
export default {
  profileApi,
  createSubdomain,
  checkDomain,
  website,
  websiteCreate,
  signUp,
  signIn,
  checkEmail,
  sendOtp,
  verifyOtp,
  resetPassword,
  signupOtpVerify,
};
