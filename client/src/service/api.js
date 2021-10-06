import axios from 'axios'
const URL = 'http://localhost:8000';
export const addUser = async (data) =>{
    try{
      return await axios.post(`${URL}/add`,data)
    }catch(err){
        console.log('while calling api', err)
    }
}


export const getUsers = async()=>{
  try{
    let response =  await axios.get(`${URL}/users`)
    console.log(response);
    return response.data;
  }catch(err){
    console.log('while calling get api',err)
  }

}

export const setConversation = async (data)=>{
  try{
    await axios.post(`${URL}/conversation/add`,data);
  }catch(err){
    console.log('error while calling setConversation api',err)

  }
}

export const getConversation  =async (data) =>{
  try{
   let response =  await axios.post(`${URL}/conversation/get`,data)
   return response.data;
  }catch(err){
    console.log('error while calling getconversation api',err)
  }
}

export const newMessage = async(data)=>{
  try{
    await axios.post(`${URL}/message/add`,data);
  }catch(err){
    console.log('error while calling newmessage api',err)
  }
}

export const getMessage = async(id)=>{
  try{
     return await axios.get(`${URL}/message/get/${id}`);
  }catch(err){
    console.log('error while calling getmessage api',err)
  }
}