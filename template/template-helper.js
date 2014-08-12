template.helper('setDefault', function (variable,data) {
	if (!variable) {
		variable = data;
	}
	return variable;
});