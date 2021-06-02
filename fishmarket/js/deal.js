const list = document.querySelector(".list_show")

function fetchList() {
    fetch('../part/deal.json')
    .then((response) => response.json())
    .then((data) => {
        data = data.log;
        let tags ='';

        for(let i=0;i<data.length && i<10;i++){
            let item = data[i];
            let tag = '<li> <input type="checkbox" name="#" value="#"><a href="#" class="hover_blackText">';
            for(j in item){
                tag=tag+`${item[j]} `;
            }
            tag = tag + '</a></li>';
            tags = tags + tag;
        }
        list.innerHTML = tags;
    })
    .catch(error=>{
        list.innerHTML = "불러오기에 실패했습니다."
    });
}


(function () {
    fetchList();
})();