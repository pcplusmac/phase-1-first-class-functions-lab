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
