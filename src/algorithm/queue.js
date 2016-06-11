define(['../../lib/underscore.js'], function() {

    var Queue = function(list) {
        var list = (!list) ? [] : list;

        return {
            enqueue: function(element) {
                list.push(element);
            },
            dequeue: function() {
                return list.shift();
            },
            contains: function(element) {
                return _.contains(list, element);
            },
            size: function() {
                return list.length;
            },
            isEmpty: function() {
                return this.size() == 0;
            }
        }
    }

    return Queue;
});