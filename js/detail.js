//--------------------Detail Shoes--------------------
function getApiDetail() {
  //Lấy tham số từ ulr
  var urlParam = new URLSearchParams(window.location.search);
  var id = urlParam.get('id');
  console.log('id', id);

  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: 'GET',
  })
  promise.then(function (res) {
    //DOM thông tin đưa lên detail
    var shoesDetail = res.data.content;
    console.log(shoesDetail);
    document.querySelector('#hinhAnh').src=shoesDetail.image;
    document.querySelector('#tenGiay').innerHTML=shoesDetail.name;
    document.querySelector('#moTaGiay').innerHTML=shoesDetail.description;

    var sizeShoes = [];
    for(var index = 0; index <shoesDetail.size.length; index++){
      sizeShoes += `<li><a href="#">${shoesDetail.size[index]}</a></li>`;
      document.querySelector('#sizeGiay').innerHTML=sizeShoes;
    };

    document.querySelector('#giaGiay').innerHTML=shoesDetail.price + '$';

  });

  promise.catch(function (err) {
    console.log(err);
  });
}

getApiDetail();