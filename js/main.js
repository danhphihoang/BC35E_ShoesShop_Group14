// Lấy thông tin danh sách giày
function listShoes() {

  var promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
  });

  promise.then(function (result) {
    console.log(result.data.content);
    renderList(result.data.content);
  });

  promise.catch(function (err) {
    console.log(err);
  });
};

//-----------------Render List Shoes-----------------------
function renderList(arrShoes) {
  var listShoes = '';
  for (var index = 0; index < arrShoes.length; index++) {
    var shoes = arrShoes[index];
    listShoes += `

<div class="shoes__item">
  <div class="item__top">
    <div class="img__shoes">
      <img class="img-fluid" src="${shoes.image}" alt="">
    </div>
    <div class="shoes__script">
      <h4>${shoes.name}</h4>
      <p>${shoes.description.length > 30 ? shoes.description.substr(0, 70) + "..." : shoes.description}</p>
    </div>
  </div>
  <div class="item__bottom">
    <button class="btn" type="button" onclick="location.href='./detail.html?id=${shoes.id}'">Buy now</button>
    <p>${shoes.price}$</p>
  </div>
</div>
`;

  }
  document.querySelector('#listShoes').innerHTML = listShoes;
}
//--------------------Detail Shoes--------------------
function detailShoes() {

  var promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product/getbyid',
    method: 'GET',
  });

  promise.then(function (result) {
    console.log(result.data.content);
    renderList(result.data.content);
  });

  promise.catch(function (err) {
    console.log(err);
  });
};






window.onload = function () {
  listShoes();
}
