function direction(facing, turn){
//Start with creating a compass array with all the possible inputs from facing (which are also all the possible results).
  let compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
//Find the numerical position of the original facing input.
  let position = compass.indexOf(facing);

//I figure if we're given turn values that are over 360 or under -360, we can simplify this with this while loops to give us turn values that are only within 360 or -360.
  
  while (turn >= 360) {
    turn = turn - 360;
  };
  while (turn <= -360) {
    turn = turn + 360;
  };  
 
//If this simplified turn value is 0, we aren't turning at all so we can return facing.
//Otherwise, we enter for loops that start at the turn value, and increment (or decrement) by 45 and add (or subtract) 1 from the position value each time.
//Then, if the position value is over 7 (or under 0) we can add/subtract 8 until we're within compass.length and return the corresponding position in compass.
  
  if (turn = 0) {
    return facing;
  } else if (turn > 0) {
    for (var i = turn; i > 0; i - 45) {
      position++;
    };
    while (position > 7) {
      position = position - 8;
    };
    return compass[position];
  } else if (turn < 0) {
    for (var i = turn; i < 0; i + 45) {
      position--;
    };
    while (position < 0) {
      position = position + 8;
    };
    return compass[position];
  };
}
