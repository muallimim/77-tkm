function tas(){
    secenekler=['tas', 'kagit', 'makas'];
    //console.log(Math.floor(Math.random() * 3));
    bilgisayarinSecimi=Math.floor(Math.random() * 3)
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu = 'images/' + secenekler[bilgisayarinSecimi] + '.png';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;

    if (secenekler[bilgisayarinSecimi] == 'tas'){
        document.getElementById('result').innerHTML='Sonuç: Berabere';
    }

    if (secenekler[bilgisayarinSecimi] == 'kagit'){
        document.getElementById('result').innerHTML='Sonuç: Yenildiniz!';
    }

    if (secenekler[bilgisayarinSecimi] == 'makas'){
        document.getElementById('result').innerHTML='Sonuç: Yendiniz!';
    }
}

function kagit(){
    secenekler=['tas', 'kagit', 'makas'];
    //console.log(Math.floor(Math.random() * 3));
    bilgisayarinSecimi=Math.floor(Math.random() * 3)
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu = 'images/' + secenekler[bilgisayarinSecimi] + '.png';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;

    if (secenekler[bilgisayarinSecimi] == 'tas'){
        document.getElementById('result').innerHTML='Sonuç: Yendiniz!';
    }

    if (secenekler[bilgisayarinSecimi] == 'kagit'){
        document.getElementById('result').innerHTML='Sonuç: Berabere!';
    }

    if (secenekler[bilgisayarinSecimi] == 'makas'){
        document.getElementById('result').innerHTML='Sonuç: Yenildiniz!';
    }
}

function makas(){
    secenekler=['tas', 'kagit', 'makas'];
    //console.log(Math.floor(Math.random() * 3));
    bilgisayarinSecimi=Math.floor(Math.random() * 3)
    console.log(secenekler[bilgisayarinSecimi]);
    resim_yolu = 'images/' + secenekler[bilgisayarinSecimi] + '.png';
    document.getElementById('bilgisayarinSecimi').src= resim_yolu;

    if (secenekler[bilgisayarinSecimi] == 'tas'){
        document.getElementById('result').innerHTML='Sonuç: Yenildiniz!';
    }

    if (secenekler[bilgisayarinSecimi] == 'kagit'){
        document.getElementById('result').innerHTML='Sonuç: Yendiniz!';
    }

    if (secenekler[bilgisayarinSecimi] == 'makas'){
        document.getElementById('result').innerHTML='Sonuç: Berabere!';
    }
}