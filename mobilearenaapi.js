const searchPhone = () => {
    const searchFeild = document.getElementById('searchBox');
    console.log(searchFeild.value);
    searchInput = searchFeild.value;
    searchFeild.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data.data));
    
}

const searchResult = data => {
  console.log(data);
    const phoneResult = document.getElementById('phoneCards');
    data.forEach(phone => {
      const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                      <img src="${phone.image}" class="rounded mx-auto d-block mt-3" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </div>
                    </div>
        `;
        phoneResult.appendChild(div);
    });
}