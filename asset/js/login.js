function LOGIN() {
    const data = {
        username: document.getElementsByName('username')[0].value,
        password: document.getElementsByName('password')[0].value,
    };
    
    console.log (data);
    fetch("http://192.168.18.12:3000/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(hasil => {
        if(hasil.status){
            // TRUE
            window.location = "/cek-turnitin.html"
        }else{
            alert(hasil.msg);
        }
        console.log(hasil)
    });
}

