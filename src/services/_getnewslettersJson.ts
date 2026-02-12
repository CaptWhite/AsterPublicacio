

import type { News, Reverse } from '../services/interfaces/newsletter.d.ts'

export async function getNewslettersAll() {
  //const response = await fetch("http://localhost:3000/data")
  //const response = await fetch("https://my-json-server.typicode.com/CaptWhite/aster-newsletter/data")
  const response = await fetch(`https://my-json-server.typicode.com/AsterBCN/newsletter-repo/data`, {cache: 'no-store' })
  console.log('getNewslettersAll')
 
  const data = await response.json() 
  return data
}
export async function getNewslettersLast() {
  //const response = await fetch("http://localhost:3000/data")
  //const response = await fetch("https://my-json-server.typicode.com/CaptWhite/aster-newsletter/data")
  const response = await fetch(`https://my-json-server.typicode.com/AsterBCN/newsletter-repo/data`, {cache: 'no-store' })
  console.log('getNewslettersLast')
  const data = await response.json()
  const dataSelected = data.reduce((previous:any, current:any) => {
    return current.id > previous.id ? current : previous;
  });

  if (!dataSelected.widthPhoto) data['widthPhoto'] = 70
  return dataSelected
}

export async function getNewsletters(page:any) {
  //const response = await fetch("http://localhost:3000/data")
  //const response = await fetch("https://my-json-server.typicode.com/CaptWhite/aster-newsletter/data")
  const response = await fetch(`https://my-json-server.typicode.com/AsterBCN/newsletter-repo/data/${page}`, {cache: 'no-store' })
  console.log('getNewsletters')

  const data = await response.json() 
  if (!data.widthPhoto) data['widthPhoto'] = 70
  return data
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
  first:'', 
  last:''}  
: {rever:'reverse', 
  first:'first', 
  last:'last'} 

    return reverse
} 