window.onload = function() {
	var r = new Calendar();
	r.render();
};

var Calendar = function() {

	this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	this.day = new Date();

	var day = document.getElementsByTagName("td");
	for (var i = 0; i < day.length; i++) {
		day[i].addEventListener('click', this.daySetter.bind(this));
	}
	var prevMonth = document.getElementById("previous-month");
	var nextMonth = document.getElementById("next-month");
	prevMonth.addEventListener('click', this.monthSetter.bind(this));
	nextMonth.addEventListener('click', this.monthSetter.bind(this));
};

Calendar.prototype.render = function() {
	this.dayRender();
	this.monthRender();
};

Calendar.prototype.dayRender = function() {
	var weekday = document.getElementById("weekday");
	var date = document.getElementById("date");
	weekday.innerHTML = this.days[this.day.getDay()];
	date.innerHTML = this.day.getDate();
};

Calendar.prototype.monthRender = function() {
	var firstDay = this.firstOfMonth();
	var days = this.daysInMonth();
	var monthHeader = document.getElementById('month-name');
	var month = this.day.getMonth();
	var year = this.day.getFullYear();
	var dayCells = document.getElementsByTagName("td");

	monthHeader.innerHTML = this.months[month];
	for (var i = 1; i < dayCells.length; i++) {
		if (i > firstDay && i <= days + firstDay) {
			dayCells[i - 1].innerHTML = i - firstDay;
		} else {
			dayCells[i - 1].innerHTML = '';
		}
	};
	this.clearToday();
	if (month === new Date().getMonth() && year === new Date().getFullYear()) {
		dayCells[new Date().getDate() + firstDay - 1].id = 'today';
	}
};

Calendar.prototype.daysInMonth = function() {
	return new Date(this.day.getFullYear(), this.day.getMonth() + 1, 0).getDate();
};

Calendar.prototype.firstOfMonth = function() {
	return new Date(this.day.getFullYear(), this.day.getMonth()).getDay();
};

Calendar.prototype.daySetter = function() {
	this.day.setDate(event.currentTarget.innerHTML);
	this.dayRender();
};

Calendar.prototype.monthSetter = function() {
	if (event.target.id === "next-month") {
 		this.day.setMonth(this.day.getMonth() + 1);
	} else if (event.target.id === "previous-month") {
		this.day.setMonth(this.day.getMonth() - 1);
	}
	this.isMonthToday();
	this.render();
};

Calendar.prototype.isMonthToday = function() {
	if (this.day.getMonth() === new Date().getMonth() &&
		this.day.getFullYear() === new Date().getFullYear()) {
		this.day = new Date();
	} else {
		this.day.setDate(1);
	}
};

Calendar.prototype.clearToday = function() {
	if (document.getElementById('today')) {
		document.getElementById('today').id = '';
	}
};
