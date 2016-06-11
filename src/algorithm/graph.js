define([
    './queue.js',
    '../../lib/underscore.js'
], function(
    Queue
) {

    /**
     * Graph Algorithm
     */
    var Graph = function() {

        var linkTo,
            showEdgesFrom;

        linkTo = function(edges, from, to) {
            if (!edges[from]) {
                edges[from] = [];
            }
            edges[from].push(to);
        };

        showEdgesFrom = function(edges, from) {
            if (!edges[from]) {
                return '';
            }
            var toList = edges[from].join(", ");
            return from + " -> " + toList;
        };

        return {

            _edges: {},

            /**
             * 간선 추가
             * @param {string}
             * @param {string}
             */
            addEdge: function(vertex1, vertex2) {
                linkTo(this._edges, vertex1, vertex2);
                linkTo(this._edges, vertex2, vertex1);
                return showEdgesFrom(this._edges, vertex1);
            },

            /**
             * 주어진 정점이 가진 간선을 모두 반환
             * @param  {string}
             * @return {array}
             */
            getEdgesFrom: function(vertex) {
                if (!this._edges[vertex]) {
                    return [];
                }
                return this._edges[vertex];
            },

            /**
             * 그래프 출력
             * @return {string}
             */
            draw: function() {
                var message = [];
                for (vertex in this._edges) {
                    message.push(showEdgesFrom(this._edges, vertex));
                }
                return message.join('\n');
            },

            /**
             * 깊이 우선 검색 알고리즘을 사용하여 주어진 접점의 하위 접점들을 모두 방문한다.
             * @param  {string}
             * @return {string}
             */
            visitDepthFirst: function(vertex) {
                if (!this._edges[vertex]) {
                    return "";
                }

                var searched = [],
                    edges = this._edges,
                    search;

                search = function(vertex) {
                    if (_.contains(searched, vertex)) {
                        return;
                    }

                    searched.push(vertex);
                    for (adjacency of edges[vertex]) {
                        search(adjacency);
                    }
                };

                search(vertex);
                return searched.join(" -> ");
            },

            /**
             * 너비 우선 검색 알고리즘으로 주어진 접점의 하위 접점들을 모두 방문한다.
             * @param  {string}
             * @return {string}
             */
            visitBreadthFirst: function(vertex) {
                var queue = new Queue(),
                    visited = [];

                queue.enqueue(vertex);
                while (!queue.isEmpty()) {

                    var target = queue.dequeue();
                    visited.push(target);

                    _.each(this._edges[target], function(adjacency) {
                        if (!_.contains(visited, adjacency)) {
                            queue.enqueue(adjacency);
                        }
                    });
                }

                return visited.join(" -> ");
            }
        }
    }

    return Graph;
});