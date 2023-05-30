//for local development
// const URL_PREFIX = "http://localhost:3001";
//deployed
const URL_PREFIX = "https://coolors-back.herokuapp.com";

const API = {
  login: (userObj) => {
    return fetch(`${URL_PREFIX}/api/users/login`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied login");
      }
    });
  },
  signup: (userObj) => {
    return fetch(`${URL_PREFIX}/api/users`, {
      method: "POST",
      body: JSON.stringify(userObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied signup");
      }
    });
  },
  verifyToken:(token)=>{
    return fetch(`${URL_PREFIX}/api/users/verifytoken`,{
        headers:{
            "authorization":`Bearer ${token}`
        }
    }).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("falied signup");
        }
      });
  },
  createPallet:(palletObj,token)=>{
    return fetch(`${URL_PREFIX}/api/pallets`,{
        method:"POST",
        body:JSON.stringify(palletObj),
        headers:{
            "Content-Type":"application/json",
            "authorization":`Bearer ${token}`
        }
    }).then(res=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied signup");
      }
    })
  },
  getAllPallets:()=>{
    return fetch(`${URL_PREFIX}/api/pallets`).then(res=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied to fetch pallets");
      }
    })
  },
  getOnePallet:palId=>{
    return fetch(`${URL_PREFIX}/api/pallets/${palId}`).then(res=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("falied to fetch pallet " + palId);
      }
    })
  }
};

export default API;
