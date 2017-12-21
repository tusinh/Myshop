const sendOrder = (name,email,address, arrayDetail) => {
    const data = { name,email,address, arrayDetail };
    console.log("du lieu donhang :");
    console.log(data);
    return fetch('http://192.168.1.87/app/donhang.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
};

module.exports = sendOrder;