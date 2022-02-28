const searchPhone = () => {
    const searchFeild = document.getElementById('searchBox');
    console.log(searchFeild.value);

    searchFeild.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFeild.value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data));
}

const searchResult = phones => {
    console.log(phones);
    const phoneResult = document.getElementById('phoneCards');
    for(const phone in phones){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                      <img src="${phone.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${phone.brand}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </div>
                    </div>
        `;
        phoneResult.appendChild(div);
    }
}