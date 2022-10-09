import {
  animation,
  style,
  animate,
  trigger,
  transition,
  state
} from '@angular/animations';


const styleOn = style({
  opacity: 1,
  transform: "translateX(0)"
})

const styleOff = style({
  opacity: 0,
  transform: "translateX(-100%)"
})

export const transitionAnimation = animation([
  trigger('transitAnimation', [
    state('show', styleOn),
    state('hide', styleOff),
    transition('show => hide', animate('700ms ease-out')),
    transition('hide => show', animate('700ms ease-in'))
  ])
]);

