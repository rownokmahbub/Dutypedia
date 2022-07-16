const initialState = {
    region:"none",
    city:"city",
    area:"area",
    address:"",

}

export const permanentAddress= (state = initialState, action) => {
    switch (action.type) {
        case"OFFLINE_USER_PERMANENT_ADDRESS_REGION":{
            return{
                ...state,
                region:action.payload
            }
        }
        case"OFFLINE_USER_PERMANENT_ADDRESS_CITY":{
            return{
                ...state,
                city:action.payload
            }
        }
        case"OFFLINE_USER_PERMANENT_ADDRESS_AREA":{
            return{
                ...state,
                area:action.payload
            }
        }
        case"OFFLINE_USER_PERMANENT_ADDRESS_ADDRESS":{
            return{
                ...state,
                address:action.payload
            }
        }
    default:
        return state
    }
}
