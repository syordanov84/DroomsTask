export const RequestCall = {
    getRequest(url, endpoint = '') {
        return cy.request({
            method: 'GET',
            url: url + endpoint,
        });
    },
    postRequest(url, endpoint = '', options = {}) {
        const { category, username, password, prod_id, cookie, flag, id } = options;
        const body = {};

        if (category) body.cat = category;
        if (username) body.username = username;
        if (password) body.password = password;
        if (cookie) body.cookie = cookie;
        if (flag) body.flag = flag;
        if (prod_id) body.prod_id = prod_id;
        if (id) body.id = id;

        return cy.request({
            method: 'POST',
            url: url + endpoint,
            body: body,
        });
    },
}