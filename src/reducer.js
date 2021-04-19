export const initialState ={
    basket: [],
    user:null
}; 
//selector(for price totalling)
export const getBasketTotal = (basket)=>
    basket?.reduce((amount,item)=>
        item.price+amount,0
    );




//pushing the data into the data layer(arrow part)
const reducer = (state,action)=>{
    console.log(action);
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //   return {
                //   this will delete all the element with the same id
                // ...state,
                // basket:state.basket.filter(item =>item.id !=action.id)
            //   }
              const index = state.basket.findIndex(
                  (basketItem)=>basketItem.id===action.id
              )
            let newBasket = [...state.basket];
             
            if(index >=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn(`can't remove product (id: ${action.id}) as its not in basket!!!`)
            }
            
            return {
                ...state,
                basket:newBasket
            }

        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }    
  
        default:
            return state;
    }
};

export default reducer;