import * as types from './actionType'

const initialState={
    musicRecords:[],
    isLoading:false,
    isError:false,
}

export const reducer =(oldState=initialState,action)=>{
    const {type,payload}=action;
    switch (type) {
        case types.GET_MUSIC_RECORD_REQUEST:
            return{
                ...oldState,
                isLoading:true,
            }
            case types.GET_MUSIC_RECORD_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                musicRecords:payload
            }
            case types.GET_MUSIC_RECORD_FAILURE:
            return{
                ...oldState,
                isError:true,
                isLoading:false,
            }

        default:
            return oldState;
    }
}