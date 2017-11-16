export const MAKE_LIST = 'MAKE_LIST'

export function makeList(isrc, ititle, iprice, idescription){
  return({type: MAKE_LIST});
}
