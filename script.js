$(".yes-button").dblclick(function() {
    $(".Part-Two-Yes").show();
    $(".start").hide();
    $(".firstImage").hide();
    $(".button").hide();
});

$(".no-button").dblclick(function() {
    $(".Part-Two-No").show();
	$(".start").hide();
    $(".firstImage").hide();
    $(".button").hide();
});

$(".part-two-button").click(function(){
    $(".Part-Two-No").hide();
    $(".start").show();
    $(".firstImage").show();
    $(".button").show();
});
    
$(".img1").hover(function(){
    $(".Story-Ending-Yes").show();
    $(".Part-Two-Yes").hide();
});    

$(".cupcake").dblclick(function(){
    $(".Story-Ending-No").show();
    $(".Story-Ending-Yes").hide();
});

$(".cake").dblclick(function(){
    $(".Story-Cake").show();
    $(".Story-Ending-Yes").hide();
});

$(".img5").mouseenter(function(){
    $(".Cakeburn").show();
    $(".Story-Cake").hide();
});

$(".img2").mouseenter(function(){
    $(".CupCakeBurn").show();
    $(".Story-Ending-No").hide();
});

$(".cake-burn2").dblclick(function(){
    $(".Story").hide();
    $(".Cake-End").show();
});

$(".cake-burn1").dblclick(function(){
    $(".Story").hide();
    $(".Cake-No").show();
});

$(".cupcake-burn2").dblclick(function(){
    $(".CupCakeBurn").hide();
    $(".CupCake-End").show();
});

$(".cupcake-burn").dblclick(function(){
    $(".Story").hide();
    $(".CupCake-No").show();
});

$(".restart").dblclick(function(){
    $(".CupCake-End").hide();
    $(".start").show();
    $(".firstImage").show();
    $(".button").show();
});

$(".restart2").dblclick(function(){
    $(".Cake-End").hide();
    $(".start").show();
    $(".firstImage").show();
    $(".button").show();
});

$(".restart3").dblclick(function(){
    $(".Story").hide();
    $(".start").show();
    $(".firstImage").show();
    $(".button").show();
});

$(".restart4").dblclick(function(){
    $(".Story").hide();
    $(".start").show();
    $(".firstImage").show();
    $(".button").show();
});