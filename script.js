
document.getElementById('searchInput').addEventListener('input', function () {
    var searchValue = this.value.toLowerCase();
    var items = document.querySelectorAll('.item');

    items.forEach(function (item) {
        var itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


document.querySelectorAll('.cont p:nth-child(2)').forEach(function (priceElement) {
    priceElement.innerHTML = '₹' + priceElement.innerHTML;
});


let loader = document.querySelector("#loader")

setTimeout(function(){

    loader.style.top = "-100%"

},2500)
