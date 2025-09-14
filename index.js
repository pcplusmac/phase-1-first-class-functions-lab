const arr = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let arrNew = [];
const returnFirstTwoDrivers = (arr) => {
     return (arrNew = [arr[0],arr[1]]);
    // return arrNew;

}

const returnLastTwoDrivers = function (arr) {
    arrNew = [arr[arr.length-2],arr[arr.length-1]]
    return arrNew;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers] ;

function createFareMultiplier(int) {
    // way 1: 
    const fn4 = function (fare) {
        return fare*int;

    }
    return fn4;

    // way 2: 
    // return (function (fare) {return fare*int;});

    // way 3: 
    // return ( fare => {return fare*int;})

    // way 4:
    // const fn4 = fare => fare*int;
    // return fn4;

    // way 5: 
    // return (fare => fare*int);
}
 
