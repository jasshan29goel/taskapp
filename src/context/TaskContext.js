import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const taskReducer=(state,action)=>{

    switch(action.type){
        case 'get_tasks':
            return action.payload
        case 'delete_task':
            return state.filter((item)=>action.payload!==item.id)
        case 'edit_task':
            return state.map((item)=>item.id===action.payload.id?action.payload:item)
        default:
            return state;   
    }
};

const getTasks=dispatch=>{
    return async()=>{
       const response= await jsonServer.get('/items');
       dispatch({type:'get_tasks',payload:response.data});
    };
};
const addTask=dispatch=>{
    return async (title,description,date,progress,callback)=>{
        
        const id=Math.floor(Math.random()*99999).toString();
        await jsonServer.post('/items',{id,title,description,date,progress});

        if(callback){
            callback();
        }

    };
};

const editTask=dispatch=>{
    return async(id,title,description,date,progress,callback)=>{
        
        await jsonServer.put(`/items/${id}`,{title,description,date,progress});
        dispatch({type:'edit_task',payload:{id,title,description,date,progress}});
        callback();
    };
};

const deleteTask=dispatch=>{
    return async (id)=>{

        await jsonServer.delete(`/items/${id}`);
        dispatch({type:'delete_task',payload:id})

    };
};

export const {Context,Provider}=createDataContext(
    taskReducer,
    {addTask,deleteTask,editTask,getTasks},[]
);