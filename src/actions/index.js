export const increment = (num) => {
   return {
      type: 'INCREMENT',
      payload: num
   }
}

export const decrement = () => {
   return {
      type: 'DECREMENT',
   }
}

export const success = (bool) => {
   return {
      type: 'SUCCESS',
      payload: bool
   }
}

export const equation = (equation) => {
   return {
      type: 'EQUATION',
      payload: equation
   }
}
