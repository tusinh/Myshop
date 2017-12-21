const getListProductOnTypeProduct = (idType, page) => {
    let url;
        url = `http://192.168.1.87/app/get_collection.php?id_type=${idType}&page=${page}`;
    return fetch(url)
    .then(res => res.json());
};

export default getListProductOnTypeProduct;