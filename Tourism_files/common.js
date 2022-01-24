function toastMsg(msg) {
	console.log("11")
	if ($("div").is("#toastMessage")) {
		$("#toastMessage").remove();
	}
	var msgDiv = '<div id="toastMessage" class="toast-message">' +
		'<span>' + msg + '</span>' +
		'</div>';
	$("body").append(msgDiv);

	//set #toastMessage of top
	//计算屏幕的高度，并让toast提示框显示在屏幕的中间
	var screenHeight = window.innerHeight;
	var toastMessage = $("#toastMessage");
	var toastHeight = toastMessage.height();
	var top = (screenHeight / 2) - (toastHeight / 2) + "px";
	toastMessage.css("top", top);

	setTimeout(function() {
		$("#toastMessage").remove();
	}, 1500);
}