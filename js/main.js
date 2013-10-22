$( document ).ready(function() {
    // Handler for .ready() called.
    
    $.getJSON("https://api.github.com/users/robinsone/repos", function(data){  
        var listItems = '';
      
        
        $.each(data.items, function(i,item){
           
            listItems += '<p>'+i.name+'</p>';
            
        });
        $('div.projects').append(listItems);
       
    });  
    
});