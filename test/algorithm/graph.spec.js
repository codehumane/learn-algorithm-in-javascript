define(['../../src/algorithm/graph.js'], function(Graph) {

    //replace “//will insert additional tests here later” with the following:
    describe("addEdge", function() {
        it("creates link from first argument to second one", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            expect(g.getEdgesFrom(0)).toEqual([1]);
        });

        it("creates link from second argument to first one", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            expect(g.getEdgesFrom(1)).toEqual([0]);
        });

        it("add edge to existing edges", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            expect(g.getEdgesFrom(0)).toEqual([1, 2]);
        });
    });

    describe("draw", function() {
        it("shows all edges", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(4, 9);

            var expected = []
            expected.push("0 -> 1, 2");
            expected.push("1 -> 0");
            expected.push("2 -> 0");
            expected.push("4 -> 9");
            expected.push("9 -> 4");
            expect(g.draw()).toEqual(expected.join("\n"));
        });
    });

    describe("visitDepthFirst", function() {
        it("visits adjacency list recursively and vertically", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(2, 9);
            g.addEdge(1, 7);

            var expected = "0 -> 1 -> 7 -> 2 -> 9";
            expect(g.visitDepthFirst(0)).toEqual(expected);
        });
    });

    describe("visitBreadthFirst", function() {
        it("visits adjacency list of vertex", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            g.addEdge(0, 2);

            var expected = "0 -> 1 -> 2";
            expect(g.visitBreadthFirst(0)).toEqual(expected);
        });

        it("visits adjacency list of vertex and adjacency list of adjacency list", function() {
            var g = new Graph();
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(2, 3);
            g.addEdge(1, 4);

            var expected = "0 -> 1 -> 2 -> 4 -> 3";
            expect(g.visitBreadthFirst(0)).toEqual(expected);
        });
    });

});