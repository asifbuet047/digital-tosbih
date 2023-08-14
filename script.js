const alhamdulliah_incre_btn = document.getElementById('alhamdulliah-incre-btn');
const alhamdulliah_decre_btn = document.getElementById('alhamdulliah-decre-btn');
const alhamdulliah_count = document.getElementById('alhamdulliah-count');
const subhanAllah_incre_btn = document.getElementById('subhanAllah-incre-btn');
const subhanAllah_decre_btn = document.getElementById('subhanAllah-decre-btn');
const subhanAllah_count = document.getElementById('subhanAllah-count');
const allahuAkbar_incre_btn = document.getElementById('allahuAkbar-incre-btn');
const allahuAkbar_decre_btn = document.getElementById('allahuAkbar-decre-btn');
const allahuAkbar_count = document.getElementById('allahuAkbar-count');


var alhamdulliahCount = parseInt(alhamdulliah_count.innerText);
var subhanAllahCount = parseInt(subhanAllah_count.innerText);
var allahuAkbarCount = parseInt(allahuAkbar_count.innerText);

alhamdulliah_incre_btn.addEventListener('click', tap);
alhamdulliah_decre_btn.addEventListener('click', tap);
subhanAllah_incre_btn.addEventListener('click', tap);
subhanAllah_decre_btn.addEventListener('click', tap);
allahuAkbar_incre_btn.addEventListener('click', tap);
allahuAkbar_decre_btn.addEventListener('click', tap);


function tap(event) {
    switch (event.target) {
        case alhamdulliah_incre_btn:
            alhamdulliahCount++;
            console.log(alhamdulliahCount);
            alhamdulliah_count.innerText = alhamdulliahCount;
            break;

        case alhamdulliah_decre_btn:
            if (alhamdulliahCount > 0) {
                alhamdulliahCount--;
                console.log(alhamdulliahCount);
                alhamdulliah_count.innerText = alhamdulliahCount;
            }
            break;
        case subhanAllah_incre_btn:
            subhanAllahCount++;
            console.log(subhanAllahCount);
            subhanAllah_count.innerText = subhanAllahCount;
            break;
        case subhanAllah_decre_btn:
            if (subhanAllahCount > 0) {
                subhanAllahCount--;
                console.log(subhanAllahCount);
                subhanAllah_count.innerText = subhanAllahCount;
            }
            break;
        case allahuAkbar_incre_btn:
            allahuAkbarCount++;
            console.log(allahuAkbarCount);
            allahuAkbar_count.innerText = allahuAkbarCount;
            break;
        case allahuAkbar_decre_btn:
            if (allahuAkbarCount > 0) {
                allahuAkbarCount--;
                console.log(allahuAkbarCount);
                allahuAkbar_count.innerText = allahuAkbarCount;
            }
            break;
    }
}

