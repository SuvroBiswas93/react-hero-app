const getStoredItem = ()=>{
    const storeItemsStr = localStorage.getItem('appList');
    if(storeItemsStr){
        const itemData = JSON.parse(storeItemsStr)
        return itemData
    }  
    else{
        return []
    }
}


const addItemToStore = (id) =>{
    const addItems = getStoredItem()
    if(addItems.includes(id)){
        alert('Item already Added')
    }
    else{
        addItems.push(id)
        const data =JSON.stringify(addItems)
        localStorage.setItem('appList',data)
    }
}


export const removeItemfromStore = id => {
  const appList  = getStoredItem() 
  try {
    const updatedList = appList.filter(p => parseInt(p) !== parseInt(id))
    localStorage.setItem('appList', JSON.stringify(updatedList))
  } catch (err) {
    console.log(err)
  }
}


export{addItemToStore,getStoredItem }