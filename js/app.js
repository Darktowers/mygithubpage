function cambios(e){
    if(!$("#developer").hasClass(e+'Font')){
        $("#developer").removeClass() 
        $("#developer").addClass(e+'Font');
    }
    if(!$("#code").hasClass(e+'Font')){
        $("#code").removeClass()
        $("#code").addClass('icon-code'); 
        $("#code").addClass(e+'Font');
        
    }
    if(!$("#aboutShort").hasClass(e+'Font')){
        $("#aboutShort").removeClass() 
        $("#aboutShort").addClass(e+'Font');
    }
    if(!$("#back").hasClass(e)){
        $("#back").removeClass() 
        $("#back").addClass(e);
    }
    if(!$("#menuc").hasClass(e+'Line')){
        $("#menuc").removeClass() 
        $("#menuc").addClass(e+'Line');
    }
        
}

$(".tab").on("click",function(){
    cambios($(this).attr("val"));
});
