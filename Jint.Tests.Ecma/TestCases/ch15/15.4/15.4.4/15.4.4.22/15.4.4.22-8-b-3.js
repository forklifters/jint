/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-8-b-3.js
 * @description Array.prototype.reduceRight -  while loop is breaken once 'kPresent' is true
 */


function testcase() {

        var called = 0;
        var testResult = false;
        var firstCalled = 0;
        var secondCalled = 0;

        function callbackfn(prevVal, val, idx, obj) {
            if (called === 0) {
                testResult = (idx === 1);
            }
            called++;
        }

        var arr = [, , , ];

        Object.defineProperty(arr, "1", {
            get: function () {
                firstCalled++;
                return 9;
            },
            configurable: true
        });

        Object.defineProperty(arr, "2", {
            get: function () {
                secondCalled++;
                return 11;
            },
            configurable: true
        });

        arr.reduceRight(callbackfn);

        return testResult && firstCalled === 1 && secondCalled === 1;
    }
runTestCase(testcase);
