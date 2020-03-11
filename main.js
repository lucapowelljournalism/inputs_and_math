$("body").on("keyup keydown keypress change", ".item input", function (e) {
	let total = 0;

	$("tr.item").each(function () {
		const $this_row = $(this);
		//get the quantity from the row
		const $qty = $this_row.find(".qty")
		let qty = $qty.val();
		//get the cost from the row
		const cost_field = $this_row.find(".cost")
		let cost = cost_field.val();
		//get tariff from each this_row//
		const tariff_pct = $this_row.data("tariff-percent");
		let pct = parseFloat(tariff_pct);
		pct = pct / 100;

		//change from strings into numbers
		qty = parseFloat(qty);
		cost = parseFloat(cost);


		const pre_tariff_total = qty * cost;

		const post_tariff_total = (pre_tariff_total + (pre_tariff_total * pct));

		console.log(post_tariff_total);
	});

});