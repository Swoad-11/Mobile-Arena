const searchPhone = () => {
    const searchField = document.getElementById('searchBox');
    searchInput = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data.data));
    
}

const searchResult = data => {
    const phoneResult = document.getElementById('phoneCards');
    data.forEach(phone => {
      const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                      <img src="${phone.image}" class="rounded mx-auto d-block mt-3" alt="${phone.phone_name}">
                      <div class="card-body">
                        <h5 class="card-title text-center">${phone.phone_name}</h5>
                      </div>
                      <div id="phoneDetails"  class="card-footer">
                      <button onclick="phoneInfo('${phone.slug}')" class="btn btn-outline-secondary" type="button" id="button-addon2">More Info</button>
                      </div>
                    </div>
        `;
        phoneResult.appendChild(div);
    });
}

const phoneInfo = phoneID => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`;
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneInfo(data.data));
  
}

const displayPhoneInfo = phoneDetails => {
  const phoneInfo = document.getElementById('phoneDetails');
    const div = document.createElement('div');
      div.classList.add('card-footer');
      div.innerHTML = `
      <h4 class="card-header">Brand-Name: ${phoneDetails.brand}</h4>
              <div class="card-body">
              <ul class="list-group">
              <li class="list-group-item list-group-item-primary">Storage: ${phoneDetails.mainFeatures.storage}</li>
              <li class="list-group-item list-group-item-secondary">Display: ${phoneDetails.mainFeatures.displaySize}</li>
              <li class="list-group-item list-group-item-success">Chipset: ${phoneDetails.mainFeatures.chipSet}</li>
              <li class="list-group-item list-group-item-danger">Memory: ${phoneDetails.mainFeatures.memory}</li>
              <li class="list-group-item list-group-item-warning">Sensors: ${phoneDetails.mainFeatures.sensors}</li>
              <li class="list-group-item list-group-item-dark">${phoneDetails.releaseDate}</li>
            </ul>
      `;
      phoneInfo.appendChild(div);
}