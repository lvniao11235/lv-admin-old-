//初始化框架
function lvInit(){
	lvInitSkin();
	$(".lv-btn-fold").click(function(){
		if($(".lv-container").hasClass("lv-fold")){
			$(".lv-container").removeClass("lv-fold");
		} else {
			$(".lv-container").addClass("lv-fold");
		}
	});
	$(".lv-menu-title .fa").click(function(){
		if($(this).hasClass("fa-angle-down")){
			$(".lv-submenu-item .lv-menu-title .fa").removeClass("fa-angle-up");
			$(".lv-submenu-item .lv-menu-title .fa").removeClass("fa-angle-down");
			$(".lv-submenu-item .lv-menu-title .fa").addClass("fa-angle-down");
			$(".lv-submenu-item .lv-menu-title").siblings(".lv-submenu-item").css("display", "none");
			$(this).removeClass("fa-angle-down");
			$(this).addClass("fa-angle-up");
			$(this).parent(".lv-menu-title").siblings(".lv-submenu-item").css("display", "block");
		} else if($(this).hasClass("fa-angle-up")) {
			$(this).addClass("fa-angle-down");
			$(this).removeClass("fa-angle-up");
			$(this).parent(".lv-menu-title").siblings(".lv-submenu-item").css("display", "none");
		}
	});
	$(".lv-menu-item").mouseleave(function(){
		$(".lv-submenu-item .lv-menu-title span.fa").removeClass("fa-angle-up");
		$(".lv-submenu-item .lv-menu-title span.fa").removeClass("fa-angle-down");
		$(".lv-submenu-item .lv-menu-title span.fa").addClass("fa-angle-down");
	});
	$(".lv-menu-item").click(function(){
		if(!$(this).hasClass("lv-selected")){
			$(".lv-menu-item").removeClass("lv-selected");
			$(this).addClass("lv-selected");
		}
	});
}

//初始化皮肤
function lvInitSkin(){
	var currentskin = $("#currentskin").val();
	$(".lv-skin").addClass(currentskin);
	$(".lv-dark-skin").addClass(currentskin);
	$(".lv-color-item").click(function(){
		lvChangeSkin("lv-skin-" + $(this).attr("lv-data"));
	});
}

//切换皮肤
function lvChangeSkin(skin){
	var currentskin = $("#currentskin").val();
	$(".lv-skin").removeClass(currentskin);
	$(".lv-dark-skin").removeClass(currentskin);
	$("#currentskin").val(skin);
	$(".lv-skin").addClass(skin);
	$(".lv-dark-skin").addClass(skin);
}