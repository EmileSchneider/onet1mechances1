export const ADD_WATCH = 'addWatch';

export const addWatch = (watch) => ({
  type: ADD_WATCH,
  data: watch,
})
//=======//

export const MAKE_WATCH = 'MAKE_WATCH';

export function makeWatch(isrc, ititle, iprice, idescription){
  return({type: MAKE_WATCH,
    data: {
    src: isrc,
    title: ititle,
    price: iprice,
    description: idescription
  }});
}
