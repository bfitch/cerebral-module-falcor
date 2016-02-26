export function falcorMap(falcorObject, callback) {
  let i = 0;
  const results = [];

  while (true) {
    const node = falcorObject[i++];
    if (node) {
      results.push(callback(node, i));
    }
    else {
      break;
    }
  }

  return results;
}