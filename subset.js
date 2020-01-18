function subset(a, last) {
    if (a.length == 0) {
        // use -1 as empty set
        return [-1]
    } else {
        last = a[a.length - 1]
        // a[0, n-1] array
        b = a.slice(0, a.length - 1)
        g = subset(b, last)
        var h = []
        g.map(x => {
            if (x == -1) {
                // if it's empty set, then combing empty set and last element
                h.push(last)
            } else {
                t = []
                t.push(x)
                t.push(last)
                h.push(t)
            }
        })
        h.map(x => g.push(x))
        return g
    }
}
g = []
a = [1, 2, 3, 4]
i = 1;
subset(a, 3).map(x => console.log(`${i++}:`, x))
