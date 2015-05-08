var Calendar = function() {

	this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

};

Calendar.prototype.initialize = function() {
	this.today = new Date();
	this.month = this.today.getMonth();
};

Calendar.prototype.method_name = function(first_argument) {
	// body...
};

