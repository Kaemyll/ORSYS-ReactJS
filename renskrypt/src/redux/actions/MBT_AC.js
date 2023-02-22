// aka apple-basket.js
export function addMBTCreator(){
    return {
        type: 'ADD_MBT'
    }
}

export function deleteMBTCreator(id, title){
    return {
        type: 'DELETE_MBT',
        payload: {
            id,
            title
        }
    }
}