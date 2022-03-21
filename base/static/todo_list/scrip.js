$(document).ready(function(){
    $("#incomplete").click(function(){
      $(this).addClass('task-complete-icon')
      $(this).removeClass('task-incomplete-icon')
      let value=$(this).attr("pid")

      $.ajax({
        type:'GET',
        url:'complete-work/',
        data:{
          id:value,
          username:'aditya'
        },
        success:function(data){
          console.log(data)
        }
      })
      
    });
  });