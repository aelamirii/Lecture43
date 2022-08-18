// Version 1
// function DetectCookie(items) {
//
//   for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if(item.indexOf("cookie") !== -1){
//        return true;
//     }
//
//     return false;
//   }
//
// }


// // Version 2
// function DetectCookie(items) {
//
//   for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if(item.indexOf("cookie") !== -1){
//        return true;
//     }
//   }
//
//   return false;
// }


// Version 3
function DetectCookie(items) {
  
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if(item.toLowerCase().indexOf("cookie") !== -1){
       return true;
    }
  }

  return false;
}
