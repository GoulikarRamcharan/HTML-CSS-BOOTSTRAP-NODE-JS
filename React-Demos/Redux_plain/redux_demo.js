import {createStore} from 'redux';

const reducer = (state = {count :0}, action) =>{
    switch (action.type){
        case "INCREMENT":
                return {count : state.count + 1};
        case "DECREMENT":
                return {count : state.count -1};
        default:
            return state;                
    }
};


const store = createStore(reducer);

const counterSubscriber = () => {
    console.log("State Changed",store.getState());
};

store.subscribe(counterSubscriber);


const increament = 
            () => ({type : "INCREMENT"});

const decrement = 
            () => ({type : "DECREMENT"});
            
            
store.dispatch(increament ());

store.dispatch(decrement());
store.dispatch(increament ());
store.dispatch(increament ());
store.dispatch(increament ());
store.dispatch(increament ());
store.dispatch(increament ());
store.dispatch(increament ());
store.dispatch(increament ());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
