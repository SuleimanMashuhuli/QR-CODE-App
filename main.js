document.getElementById('btn').addEventListener('click', handleQrcode);

function handleQrcode(){
    const input = document.getElementById('text').value;
    if(!input){
        alert("Please enter a value to generate QR code");
        return;
    }
    const canvas = document.getElementById('qrq');

    const qr = new QRious({
        element : document.getElementById("qrq"),
        value : input,
        size : 200,
    });

    document.getElementById('qrq').style.display='block';
}

