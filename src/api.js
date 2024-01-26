const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token;
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  // "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  // "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };
    //makes a query string for what we are looking for
    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies.
   *
   * If searchTerm is passed, get details on companies matching search.
   */

  static async getAllCompanies(nameLike) {
    let res;

    if (nameLike === undefined || nameLike === "") {
      res = await this.request("companies");
    } else {
      res = await this.request("companies", { nameLike });
    }
    return res.companies;
  }


  /** Get details on all jobs */

  static async getAllJobs(title) {
    // console.log("getALlJobs title", title)
    let res;
    if (title === undefined || title === "") {
      res = await this.request("jobs");
    } else {
      res = await this.request("jobs", { title });
    }
    console.log("getAllJobs", res);
    return res.jobs;
  }

  static async getUser(username) {
    let resp = await this.request(`users/${username}`);

    return resp;
  }

  //req to login
  static async login(userData){
    let resp = await this.request("auth/token", userData, "POST");
    JoblyApi.token = resp.token;
    return resp.token;
  }


  //req to signup
  static async signup(userData) {
    let resp = await this.request("auth/register", userData, "POST");
    JoblyApi.token = resp.token;

    //might not need this return
    return resp.token;
  }

  //would need a logout function to clear token
  static logout(){
    JoblyApi.token = "";
  }
}

export default JoblyApi;
