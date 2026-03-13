async function getTarifler() {
    const response =await fetch("https://dummyjson.com/recipes");
    const data =await response.json();
    return data.recipes;

}
function kartOlustur(tarif){
    return`
    <div class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
    <figure>
    img src="${tarif.image}"
    alt="${tarif.name}"
    class="w-full h-48 object-cover">
    </figure>
    <div class="card-body p-4">
    <h2 class="card-title text-base">${tarif.name}</h2>
    <div class="flex flex-wrap gap-3 text-base-content/70 mt-2"
    <span>⏱Hazırlık:${tarif.prepTimeMinutes} dk</span>
    <span>🔥 Pişirme:${tarif.cookTimeMinutes} dk</span>
    <span>🍽 Porsiyon:${tarif.servinges}</span>
    </div>
    <div class="flex items-center gap-3 text-sm  mt-2">
    <span>⭐${tarif.rating}</span>
    <span class="text-base-content/60">💬 ${tarif.reviewCount}yorum </span>
    </div>
    <div class="flex flex-wrap gap-1 mt-2">
    ${tarif.tags.map(tag=>`
        <span class="badge-outline badge-xs"{tag}></span>
        `).join("")}
        </div>
        </div>
        </div>
        `;
    }
    async function sayfayiDoldur(){
        const tarifler = await getTarifler();
        const tumKartlar = tarifler.map(tarif=>kartOlustur(tarif)).join();
        document.getElementById("recipe-container").innerHTML = tumKartlar;
    }
    sayfayiDoldur();


