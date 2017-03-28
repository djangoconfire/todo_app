$(document).ready(function(){
    alert('inside todo');
    $('form').on('submit',function(){
        var item=$('form input');
        var todo={item:item.val()};
        alert(todo);

        $.ajax({
            type:'POST',
            url:  '/todo',
            data:todo
            success:function(data){
                location.reload();
            }
        });
        return false;
    });

    $('li').on('click',function(){
        var item=$(this).text().replace(/ /g,"-");
        $.ajax({
            type:'DELETE',
            url:'/todo/' + item,
            success: function(data){
                location.reload();
            }
        });
    });
});
