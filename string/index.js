var modtask = function () {}

/*
 String inspection tool useful for testing protocol string inspections
 * Supports wildcards
*/

modtask.testStr = function (p1, p2) {
  if (p1.length < p2.length) {
    p2 = p2.substr(0, p1.length);
  }
  if (p1 != p2) {
    for (var i = 0, len = p1.length; i < len; i++) {
      if (p1[i] != p2[i] && p1[i] != '*') {
        return {
          reason: 'verify failed:\n-----------expected----------\n' + JSON.stringify(p1) + '\n--------------actual---------------\n' + JSON.stringify(p2) + '...\n'
        };
      }
    }
  }
  return {success: true};
}
