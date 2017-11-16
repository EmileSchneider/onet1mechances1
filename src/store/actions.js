export const MAKE_LIST = 'MAKE_LIST'

export function makeList(){
  return(
    {
      type: MAKE_LIST
    }
  );
}

export const SET_NAME = 'SET_NAME';
export const SET_FILE = 'SET_FILE';
export const SET_PRICE = 'SET_PRICE';
export const SET_DESCR = 'SET_DESCR';
export const SET_DELIV = 'SET_DELIV';

export function setName(name){
  return(
    {
      type: 'SET_NAME',
      data: name
    }
  );
}

export function setFile(file){
  return(
    {
      type: 'SET_FILE',
      data: file
    }
  );
}
export function setPrice(price){
  return(
    {
      type: 'SET_PRICE',
      data: price
    }
  );
}
export function setDescr(descr){
  return(
    {
      type: 'SET_DESCR',
      data: descr
    }
  );
}
export function setDeliv(deliv){
  return(
    {
      type: 'SET_DELIV',
      data: deliv
    }
  );
}
