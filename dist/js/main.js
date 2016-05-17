(function($) {
	"use strict";
	$(document).ready(function() {
		$("#frm-login").validate({
			rules: {
				username: "required",
				password: "required"
			}
		});
	});
})(jQuery);
