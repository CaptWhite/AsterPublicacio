import {loadSpreadsheet} from './sheets.js'
import type { Reverse } from './interfaces/newsletter.js'

export async function loadNewsletters() {
  const data = await loadSpreadsheet() 
  return {}
}

export async function getNewslettersAll() {
  const {data} = await loadSpreadsheet()
  return data
}
export async function getNewslettersLast() {
  'use server'
  const {data} = await loadSpreadsheet()
  const dataSelected = data.reduce((previous:any, current:any) => {
    return current.id > previous.id ? current : previous;
  });

  if (!dataSelected.widthPhoto) data['widthPhoto'] = 70
  return dataSelected
}

export async function getNewsletters(page:any) {
  const {data} = await loadSpreadsheet()
  const dataSelected = data.filter((item: { id: any }) => item.id==page)  
  if (!dataSelected[0].widthPhoto[0]) dataSelected[0]['widthPhoto'] = 70
  return dataSelected[0]
}



export function newsSortedGrouped (news:any) {
  const newsSorted = news.slice().sort(function(a:any, b:any) {
    return a.order - b.order;
  })
 
  const newsGruopedBy = newsSorted.reduce(function (acc:any, obj:any) {
    const keyValue = obj['category'];
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(obj);
    return acc;
  }, {});
  return newsGruopedBy
}

export function calculeClasesReverse(news:any) {
const reverse: Reverse =  (news.order%2 == 1 || news.widthPhoto == 0 || news.widthPhoto == 100) 
? {rever:'', 
  first:'column column-2', 
  last:'column column-2'}  
: {rever:'reverse', 
  first:'column column-2 first', 
  last:'column column-2 last'} 

return reverse
} 