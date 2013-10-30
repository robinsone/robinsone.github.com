$( document ).ready(function() {
    // Handler for .ready() called.
    //var myArray = [ "hello", "world", "!" ];
    
    $.getJSON("https://api.github.com/users/robinsone/repos", function(data){  
        var listItems = '';

        listItems += '<ul class="list-group">';
        $.each(data, function(i,item){
            
            if(item.name != "robinsone.github.com"){
                listItems += '<li class="list-group-item"><a href="'+item.html_url+'">';
                listItems += '<span class="badge pull-right">'+item.language+'</span>'+item.name+'</a></li>';
            }
            
        });
        listItems += '</ul>';
        $('#githubprojects').append(listItems);
        
    });  
    
});