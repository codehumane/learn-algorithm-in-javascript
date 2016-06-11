define([
    '../../src/algorithm/sort.js'
], function(
    Sort
) {

    describe("bubble", function() {
        it("sort 2 elements", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.bubble([5, 1]);

            // Then
            expect(sorted).toEqual([1, 5]);
        });

        it("sort 5 elements for 1 pass", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.bubble([5, 1, 2, 4, 7]);

            // Then
            expect(sorted).toEqual([1, 2, 4, 5, 7]);
        });

        it("sort 5 elements for 3 passes", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.bubble([5, 1, 2, 7, 4]);

            // Then
            expect(sorted).toEqual([1, 2, 4, 5, 7]);
        });        
    });

    describe("selection", function() {
        it("sort 2 elements", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.selection([5, 1]);

            // Then
            expect(sorted).toEqual([1, 5]);
        });

        it("sort 5 elements for 1 pass", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.selection([5, 1, 2, 4, 7]);

            // Then
            expect(sorted).toEqual([1, 2, 4, 5, 7]);
        });

        it("sort 5 elements for 3 passes", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.selection([5, 1, 2, 7, 4]);

            // Then
            expect(sorted).toEqual([1, 2, 4, 5, 7]);
        });        
    });

    describe("insertion", function() {
        it("sort 2 elements", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.insertion([5, 1]);

            // Then
            expect(sorted).toEqual([1, 5]);
        });

        it("sort 5 elements for 1 pass", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.insertion([5, 1, 2, 4, 7]);

            // Then
            expect(sorted).toEqual([1, 2, 4, 5, 7]);
        });

        it("sort 5 elements for 3 passes", function() {
            // Given
            var sort = new Sort();

            // When
            var sorted = sort.insertion([5, 1, 2, 7, 4]);

            // Then
            expect(sorted).toEqual([1, 2, 4, 5, 7]);
        });        
    });

    describe("performance", function() {
        it("sort 100,000 elements with selection, insertion, and bubble 100 times and average performance", function() {
            var sort = new Sort(),
                bubbleTotal = 0,
                selectionTotal = 0,
                insertionTotal = 0;

            for (var i = 0; i < 100; i++) {
                var randomNumbers = [];
                for (var i=0; i < 10000; i++) {
                    randomNumbers.push(parseInt(Math.random() * 10000));
                }

                var start,
                    end;

                start = new Date().getTime();
                sort.bubble(randomNumbers);
                end = new Date().getTime();
                bubbleTotal += end - start; // milliseconds

                start = new Date().getTime();
                sort.selection(randomNumbers);
                end = new Date().getTime();
                selectionTotal += end - start; // milliseconds

                start = new Date().getTime();
                sort.insertion(randomNumbers);
                end = new Date().getTime();
                insertionTotal += end - start; // milliseconds                
            }

            console.log('bubble average: ' + bubbleTotal / 100);
            console.log('selection average: ' + selectionTotal / 100);
            console.log('insertion average: ' + insertionTotal / 100);
        });
    });

});