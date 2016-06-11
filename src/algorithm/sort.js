define([
    '../../lib/underscore.js'
], function(
    Queue
) {

    var swap = function(array, index1, index2) {
            var cached = array[index1];
            array[index1] = array[index2];
            array[index2] = cached;
        }

    var bubble = {

        /**
         * 이중 for 문으로 버블 정렬을 수행한다.
         * @param  {숫자 목록}
         * @return {정렬된 숫자 목록}
         */
        withDoubleFor: function(elements) {
            // console.log('bubble sort input: ' + elements);
            for (var i=1; i < elements.length; i++) {
                for (var j=1; j < elements.length; j++) {
                    if (elements[j-1] > elements[j]) {
                        swap(elements, j-1, j);
                    }
                }
                
                // console.log('bubble sorted ' + i + 'th :' + elements);
            }

            return elements;
        },

        /**
         * for 문과 while 문을 사용해서 버블 정렬을 수행한다.
         * @param  {숫자 목록}
         * @return {정렬된 숫자 목록}
         */
        withForAndWhile: function(elements) {
            // console.log('bubble sort input: ' + elements);
            var swapped = true,
                pass = 1;

            while (swapped) {
                swapped = false;
                for (var i=1; i < elements.length; i++) {
                    if (elements[i-1] > elements[i]) {
                        swap(elements, i-1, i);
                        swapped = true;
                    }
                }

                // console.log('bubble sorted ' + pass + 'th: ' + elements);
                pass++;
            }

            return elements;
        },

        /**
         * 
         * @param  {[type]}
         * @return {[type]}
         */
        effectively: function(elements) {
            // console.log('bubble sort input: ' + elements);
            var swapped = true,
                lastSwapPosition = 0,
                maxIndex = elements.length,
                pass = 1;

            while (swapped) {
                swapped = false;
                for (var i=1; i < maxIndex; i++) {
                    if (elements[i-1] > elements[i]) {
                        swap(elements, i-1, i);
                        lastSwapPosition = i;
                        swapped = true;
                    }
                }

                // console.log('bubble sorted ' + pass + 'th: ' + elements);
                maxIndex = lastSwapPosition;
                pass++;
            }

            return elements;
        }
    };

    /**
     * 선택 정렬은 가장 작은 값을 찾아 왼쪽부터 채워 넣는 방식을 말한다.
     * 예를 들면, 다음과 같다.
     *
     * 처음 상태: 41352
     * 1차 정렬: 14352
     * 2차 정렬: 12435
     * 3차 정렬: 12345 (끝)
     */
    var selection = {

        /**
         * 기본 적인 선택 정렬 방식으로 정렬을 수행한다.
         * ex) 5, 1, 2, 7, 4 -> 1, 2, 4, 5, 7
         * 
         * @param  {숫자 목록}
         * @return {정렬된 숫자 목록}
         */
        basic: function(elements) {
            // console.log('selection sort input: ' + elements);
            for (var i=0; i < elements.length - 1; i++) {

                var minValueIndex = i;
                for (var j=i; j < elements.length; j++) {
                    if (elements[minValueIndex] > elements[j]) {
                        minValueIndex = j;
                    }
                }

                swap(elements, i, minValueIndex);
                // console.log('selection sorted ' + (i+1) + 'th: ' + elements);
            }

            return elements;
        }
    };

    /**
     * 삽입 정렬
     *
     * ex.
     * 
     * 3 7 4 9 5 2 6 1
     * 3 7 4 9 5 2 6 1
     * 3 7 4 9 5 2 6 1
     * 3 4 7 9 5 2 6 1
     * 3 4 7 9 5 2 6 1
     * 3 4 5 7 9 2 6 1
     * 2 3 4 5 7 9 6 1
     * 2 3 4 5 6 7 9 1
     * 1 2 3 4 5 6 7 9
     */
    var insertion = {

        /**
         * 기본 적인 삽입 정렬 방식으로 정렬을 수행한다.
         * @param  {array} elements 입력된 배열
         * @return {array}          정렬된 배열
         */
        basic: function(elements) {
            // console.log('insertion sort input: ' + elements);
            for (var i=0; i < elements.length; i++) {

                var target = elements[i];
                for (var j=i; (j > 0 && target < elements[j-1]); j--) {
                    elements[j] = elements[j-1];
                }

                elements[j] = target;
                // console.log('insertion sorted ' + (i+1) + 'th: ' + elements);
            }

            return elements;
        }
    }

    var Sort = function() {

        return {
            bubble: function(elements) {
                return bubble.effectively(elements);
            },
            selection: function(elements) {
                return selection.basic(elements);
            },
            insertion: function(elements) {
                return insertion.basic(elements);
            }
        }
    }

    return Sort;
});
