/**
 * O( Log N )
 */

export class BinarySearch {
  public static search(array: number[], searchValue: number): number | null {
    // We cannot iterate over an empty array so:
    if (array.length === 0) {
      return null;
    }

    // first, we stablish the lower and upper bound of where the value
    // we're searching for can be. To start, the lower bound is the first
    // value in the array, while the upper bound is the last value

    let lowerBound = 0;
    let upperBound = array.length - 1;
    let midpoint = 0;
    let valueAtMidpoint = 0;

    // We begin a loop in which we keep inspecting the middlemost value
    // between the upper and lower bounds:

    while (lowerBound <= upperBound) {
      // We find the midpoint between the upper and lower bounds
      midpoint = Math.floor((upperBound + lowerBound) / 2);

      // We inspect value at the value_at_midpoint
      valueAtMidpoint = array[midpoint];

      // If the value at the midpoint is the one we're looking for, we're done.
      // if not, we change the lower or upper bound based on whether we need
      // to guess higher or lower:

      if (searchValue == valueAtMidpoint) {
        return valueAtMidpoint;
      } else if (searchValue < valueAtMidpoint) {
        upperBound = midpoint - 1;
      } else if (searchValue > valueAtMidpoint) {
        lowerBound = midpoint + 1;
      }
    }

    // if we've narrowed the bounds until they've reached each other, that
    // means that the value we're searching for is not contained within this array
    return null;
  }
}
