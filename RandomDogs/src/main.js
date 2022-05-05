const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=6';

const figure = document.createElement('figure');

figure.style.display = 'flex';
figure.style.justifyContent = 'center';

async function getDog(){
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log(data);
 
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    const img5 = document.getElementById('img5');
    const img6 = document.getElementById('img6');

    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
    img4.src = data[3].url;
    img5.src = data[4].url;
    img6.src = data[5].url;

    if(res.status !== 200){
        console.log(res.status + data.message);
    }
}

// function putDogs(count) {
//     for (let i = 0; i <= count; i++) {
//         getDog();
//     }
// }