(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this + "";
        } else {
            return str + this;
        };
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this + "";
        } else {
            return this + str;
        };
    };
    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    };
    String.prototype.truncate = function (n) {
        str = this + "";
        let result = this + "";
        n = Number(n);
        if (str.length < n) {
            return str;
        } else {
            if (str.includes(' ')) {
                while (str.length > n) {
                    str = str.split(' ').slice(0, -1).join(' ') + '...';
                }
            } else {
                if (n >= 4) {
                    str = str.slice(0, n - 3) + "...";
                } else {
                    str = '.'.repeat(n);
                }
            };
            return str;
        }
    };
    String.format = function (str, ...params) {
        let result = str;
        for (let i = 0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    };
    // let str = 'my string';
    // // console.log(str);
    // str = str.ensureStart('my');
    // // console.log(str);
    // str = str.ensureStart('hello ');
    // str = str.isEmpty();
    // str = str.truncate(16);
    // str = str.truncate(14);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);
    // str = String.format('The {0} {1} fox',
    //     'quick', 'brown');
    //     str = String.format('jumps {0} {1}',
    //         'dog');

    // console.log(str);
})();

solve()
