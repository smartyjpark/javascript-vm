(function(window) {
    var wallet = [
        {
            unit: 10,
            count: 0
        },
        {
            unit: 50,
            count: 0
        },
        {
            unit: 100,
            count: 0
        },
        {
            unit: 500,
            count: 0
        },
        {
            unit: 1000,
            count: 0
        },
        {
            unit: 5000,
            count: 0
        },
        {
            unit: 10000,
            count: 0
        }
    ];

    wallet.total = 0;

    wallet.putMoney = function (unit, count) {
        unit = parseInt(unit);
        count = parseInt(count);

        var item = this.findMoney(unit);

        item.count += count;
        this.total += unit * count;
    }

    wallet.getMoney = function(unit, count) {
        unit = parseInt(unit);
        count = parseInt(count);

        var item = this.findMoney(unit);

        item.count -= count;
        this.total -= unit * count;
    }

    wallet.getTotalMoney = function() {
        return this.total;
    }

    wallet.findMoney(unit) {
        return this.find(function(item) {
            return item.unit === unit;
        });
    }

    wallet.getCount(unit) {
        unit = parseInt(unit);
        var item = getMoney(unit);

        return item.count;
    }

    var model = {
        wallet: wallet
    }

    window.vm = window.vm || {};
    window.vm.model = model;

})(window);
