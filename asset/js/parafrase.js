function parafrase(){
    const data = {
        file: document.getElementsByName('file')[0].value,
        file2: document.getElementsByName('file2')[0].value,
        deadline: document.getElementsByName('deadline')[0].value,
        persen: document.getElementsByName('persen')[0].value,
        WhatsApp: document.getElementsByName('WhatsApp')[0].value,
        catatan: document.getElementsByName('catatan')[0].value,
    };
    console.log(data);

    fetch("http://192.168.18.12:3000/parafrase", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(hasil => {
        if (hasil.status) {
            alert(hasil.msg); 
        }else{
            
        }
    });
}
