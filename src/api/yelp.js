import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer uy2KtRDSNGwvx8Wzy9X16t4zYzs5UUQz4LLkmVz2T_m5rvkfc_nEuB10soXcKWzMxDJwMY_ptJVz_gQ4425XVlVNTrJa10ZaNkRcPkIInzu9nDlZPDCutVu6dXgBX3Yx'
  }
});
