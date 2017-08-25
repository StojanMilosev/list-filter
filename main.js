//definisanje promenljivih html elemenata
    var input,filter;
    var list = document.getElementById("filter-list");
    var li = list.getElementsByTagName("li");
    
  function filterList(){
    //definisanje html elemnta za unos
    input = document.getElementById("filter-input");
    //kovertovanje svih karaktera unosa u velika slova
    filter = input.value.toUpperCase();
    //za svaki element filtrirane liste
    for(var i = 0;i<li.length;i++){
        //vrednost sadržaja elementa liste
        name  = li[i].innerHTML;
        //ako se vrednost promenljive filter nalazi u promenljivoj name
        //dodaj CSS pravilo "display:block;" koja utiče na vidljivost elemnta liste
        //promenljive "name" i "filter" su tipa string 
        if(name.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none";
        }
    }
};