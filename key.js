$(document).ready(function(){
    $("input").keydown(function(){
$(this).css("background-color","red")
    })
    $("input").keyup(function(){
        $(this).css("background-color","pink")
            })
            let x=0;
            $("input").keypress(function(){
                $("span").text(x+=1)
            })
})