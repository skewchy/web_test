function direction(facing, turn) {
    let compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let position = compass.indexOf(facing);

    if (turn == 0) {
        return facing;
    } else if (turn > 0) {
        for (var i = turn; i > 0; i = i - 45) {
            position++;
          }
        return(compass[position % 8])
      
    } else if (turn < 0) {
        for (var d = turn; d < 0; d = d + 45) {
            position--;
          }
      if (position < 0) {
        for (var f = position; f < 0; f = f + 8)
          position = position + 8
      }
              return(compass[position % 8])
          }
    }
