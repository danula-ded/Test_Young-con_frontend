function scan(maps) {
  let arr = maps.slice();

  function buildPath(arr, x, y, res) {
    if (
      y < 0 ||
      y >= arr.length ||
      x < 0 ||
      x >= arr[y].length ||
      arr[y][x] !== 1
    ) {
      return;
    }

    if (y === 0) res.ceil = true;
    if (y === arr.length - 1) res.floor = true;

    arr[y][x] = -1;

    buildPath(arr, x, y - 1, res);
    buildPath(arr, x - 1, y, res);
    buildPath(arr, x + 1, y, res);
    buildPath(arr, x, y + 1, res);
  }

  const res = {
    ceil: 0,
    floor: 0,
    both: 0,
  };

  for (let i = 0; i < arr[0].length; i++) {
    let testObj = {
      ceil: false,
      floor: false,
    };

    buildPath(arr, i, 0, testObj);
    if (testObj.ceil) {
      if (testObj.floor) {
        res.both++;
      } else {
        res.ceil++;
      }
    }

    testObj = {
      ceil: false,
      floor: false,
    };

    buildPath(arr, i, arr.length - 1, testObj);
    if (testObj.floor) {
      if (testObj.ceil) {
        res.both++;
      } else {
        res.floor++;
      }
    }
  }

  return res;
}

module.exports = { scan };
