function equals(arr1, arr2) {
    return arr1.length === arr2.length && arr1.map(function(value, index) {
        return arr1[index] === arr2[index]
    }).filter(function(isEqual) {
        return isEqual
    }).length === arr1.length
}

var tests = []

tests.push({
    expr: function() {
        return equals(divideIntoPools(100, [.5, .5]), [50, 50])
    },
    label: "it divides into equal pools"
})

tests.push({
    expr: function() {
        return equals(divideIntoPools(123.45, [.9, .04, 0.03, 0.02, 0.01]), [111.11, 4.94, 3.70, 2.47, 1.23])
    },
    label: "it handles many pools"
})

tests.push({
    expr: function() {
        return 123.45 === [111.11, 4.94, 3.70, 2.47, 1.23].reduce(function(a,b){return a+b})
    },
    label: "the total of pools equals the total"
})

tests.push({
    expr: function() {
        return equals(divideIntoPools(0.03, [.51, .49]), [0.02, 0.01])
    },
    label: "it assignes reminders to the greater pool"
})

tests.push({
    expr: function() {
        return equals(divideIntoPools(0.10, [.75, .25]), [0.08, 0.02])
    },
    label: "it assignes reminders to the first pool"
})
