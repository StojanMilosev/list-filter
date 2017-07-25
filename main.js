

    var input,filter;
    var list = document.getElementById("filter-list");
    var li = list.getElementsByTagName("li");
    
  function filterList(){
    input = document.getElementById("filter-input");
    filter = input.value.toUpperCase();
    console.log(filter);
    for(var i = 0;i<li.length;i++){
        name  = li[i].innerHTML;
        if(name.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none";
        }
    }
};