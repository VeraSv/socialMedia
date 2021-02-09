const updateNewMessageBody='updateNewMessageBody';
const sendMessage='sendMessage';
let initialState ={userData:[{id:1, name:"Slava",img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}, {id:2, name:"Anna", img:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/50234/man-office-worker-emoji-clipart-md.png"}, {id:3, name:"Vasja", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"},{id:4, name:"Sasha", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}, {id:5, name:"Vera", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}],
messagesData:{data:[{id:1, message:"Hi"} ,{id:2, message:"How are you"},{id:3, message:"Have a good day!"},
{id:4, message:"Be happy"}], newMessageBody:''}};
 const dialogsReducer =(state=initialState, action) =>{
     let stateCopy={...state, messagesData:{...state.messagesData}};
     stateCopy.messagesData={...state.messagesData};
    switch (action.type) {
        
        case updateNewMessageBody:
            stateCopy.messagesData.newMessageBody=action.newText;
                
                break;
        case sendMessage:
            let body= state.messagesData.newMessageBody;

            stateCopy.messagesData.data.push({id:6, message:body});
           stateCopy.messagesData.newMessageBody='';
        break;
        default: 
return stateCopy;
    }
    
    return stateCopy;
}

export default dialogsReducer


export const sendMessageCreator=()=>{
    return {type:sendMessage}
};
export const updateNewMessageBodyCreator =(text)=> {
    return  {type:updateNewMessageBody, newText:text};
}