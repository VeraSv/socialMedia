const updateNewMessageBody='updateNewMessageBody';
const sendMessage='sendMessage';

let initialState ={userData:[{id:1, name:"Slava",img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}, {id:2, name:"Anna", img:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/50234/man-office-worker-emoji-clipart-md.png"}, {id:3, name:"Vasja", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"},{id:4, name:"Sasha", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}, {id:5, name:"Vera", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}],
     messagesData:{data:[{id:1, message:"Hi"} ,{id:2, message:"How are you"},{id:3, message:"Have a good day!"},{id:4, message:"Be happy"}],
     newMessageBody:''}};

const dialogsReducer =(state=initialState, action) =>{
    switch (action.type) {
        case updateNewMessageBody:
          return {...state, messagesData:{...state.messagesData, newMessageBody:action.newText}};
        case sendMessage:
          return {...state, messagesData:{...state.messagesData, newMessageBody:'',data:[...state.messagesData.data,{id:6, message:state.messagesData.newMessageBody}]}};
        default: 
          return state;
    }  
}

export default dialogsReducer;

export const addMessage =()=>{
    return {type:sendMessage}
};
export const  messageChange=(text)=> {
    return  {type:updateNewMessageBody, newText:text};
}