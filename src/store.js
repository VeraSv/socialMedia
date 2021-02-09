import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

var store={ 
    _state:{
        dialogsData:{userData:[{id:1, name:"Slava",img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}, {id:2, name:"Anna", img:"https://creazilla-store.fra1.digitaloceanspaces.com/emojis/50234/man-office-worker-emoji-clipart-md.png"}, {id:3, name:"Vasja", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"},{id:4, name:"Sasha", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}, {id:5, name:"Vera", img:"https://im0-tub-by.yandex.net/i?id=30da958c5d9a143ab70b2cbe9bb464d0&n=13"}],
messagesData:{data:[{id:1, message:"Hi"} ,{id:2, message:"How are you"},{id:3, message:"Have a good day!"},
{id:4, message:"Be happy"}], newMessageBody:''}},
postData:{data:[{id:1, message:"Hi!", likesCount:"5"}, {id:2, message:"How are you?", likesCount:"0"}], newPostText:''},

},
getState() {
return this._state;
},
subscribe (observer) {
this._callSubscriber=observer;
},

_callSubscriber(){
    console.log('State changed')
},
 
dispatch(action){
     this._state.postData = profileReducer (this._state.postData, action);
    this._state.dialogsData.messagesData = dialogsReducer (this._state.dialogsData.messagesData, action);
    
    this._callSubscriber(this._state);

}

}


export default store;