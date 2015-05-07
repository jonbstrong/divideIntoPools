function divideIntoPools(money, percentage) {

	var percentageTotal = 0;

	// Ensure that percentage total is not over or under 100%
	for (var i = 0; i < percentage.length; i++) {
		percentageTotal += percentage[i];
	};

	if (percentageTotal != 1) {
		console.log('percentages must add up to be 100%');
		return false;
	}

	// Initialise pools array
	var pools = [],
		totalCount = 0;

	// format a floating point number to 2 decimal points & round all numbers after
	function formatPoolItem (number) {
		return parseFloat(number.toFixed(2));
	}

	for (var i = 0; i < percentage.length; i++) {
		// multiply the total with the percentage and format it to match spec
		var poolItem = formatPoolItem(money * percentage[i]);

		pools.push(poolItem);
		totalCount += poolItem;
	};

	if (totalCount > money) {
		var extra = totalCount - money,
			lastItem = pools[pools.length-1];

		// subtract the additional amount from the last item 
		// and format it to match the specs
		pools[pools.length-1] = formatPoolItem(lastItem - extra);
	}

	return pools;
}
