function popupToggle(target) {
  var popupsContainer = document.getElementById('popupsContainer');
  var popups = document.querySelectorAll('#popup');

  if (popupsContainer.style.visibility == 'hidden') {
    popups.forEach((pop) => {
      if (pop.className == target) {
        popupsContainer.style.visibility = "visible";
        pop.style.visibility = "visible";
      }
    });
  } else {
    popupsContainer.style.visibility = "hidden";
    popups.forEach((pop) => {
      pop.style.visibility = "hidden";
    });
  }
}
function carousel(task) {
  let carousel = Array.from(document.getElementById('carousel').children);
  let active = []
  carousel.forEach((li, i) => {
    if (li.style.visibility == 'visible') {
      active.push(i)
      li.style.visibility = 'hidden'
      li.style.position = 'absolute'
    }
  });
  if (task == 'next') {
    if (active[active.length-1] != carousel.length-1) {
      active.forEach((item, i) => {
        active[i] += 1
      });
    }
  } else {
    if (active[0] != 0) {
      active.forEach((item, i) => {
        active[i] -= 1
      });
    }
  }
  carousel.forEach((li, i) => {
    if (active.includes(i)) {
      li.style.visibility = 'visible'
      li.style.position = 'static'
    }
  });
}