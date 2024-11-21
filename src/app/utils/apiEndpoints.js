// utils/apiEndpoints.js
const CAND_BASE_PATH = process.env.NEXT_PUBLIC_CAND_BASE_PATH; // or use environment variable if required
const NEXT_PUBLIC_JOBS_BASE_PATH = process.env.NEXT_PUBLIC_JOBS_BASE_PATH;
const NEXT_PUBLIC_MASTER_BASE_PATH = process.env.NEXT_PUBLIC_MASTER_BASE_PATH;

/* export const auth = {
  login: `${BASE_URL}/admin/v1/login`,
  refreshToken: `${BASE_URL}/admin/v1/refreshToken`,
  // Add other auth-related endpoints here
};

export const user = {
  getUser: `${BASE_URL}/user/v1/getUser`,
  updateUser: `${BASE_URL}/user/v1/updateUser`,
  // Add other user-related endpoints here
}; */

export const jobs = {
  searchSuggestions: `${NEXT_PUBLIC_JOBS_BASE_PATH}/v1/candidate/search/suggestions`,
  searchJobs: `${NEXT_PUBLIC_JOBS_BASE_PATH}/v1/guest/search`,
};

export const master = {
  getLocations: `${NEXT_PUBLIC_MASTER_BASE_PATH}/v1/locations`,
};

// Add other endpoint groups if needed
