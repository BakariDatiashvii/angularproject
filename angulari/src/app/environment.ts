const baseUrl = "http://localhost:5133/api";

export const environment = {
    production: true,
    loginUrl: `${baseUrl}/Employee/login`,
    addstoreapiUrl: `${baseUrl}/Employee`,
    registermanagerandoperatorUrl: `${baseUrl}/Employee/register-managerandoperator`,
    getmanagerstoreproductUrl: `${baseUrl}/Employee/managergetall`,
    getoperatortproductUrl: `${baseUrl}/Employee/operatorgetall`,
    registeradminbycompanyUrl: `${baseUrl}/Employee/create`,
    updateusermanagerandoperatorUrl: `${baseUrl}/Employee/update-user`,
    getuserbyidUrl: `${baseUrl}/Employee/get-user-by-id`,
    getallstoresUrl: `${baseUrl}/Employee/get-all-stores`,
    addProductUrl: `${baseUrl}/Employee/add-product-opretor`,
    updateproductsemosUrl: `${baseUrl}/Employee/update-product`,
    updateproductsellUrl: `${baseUrl}/Employee/update-productSell`
};

  