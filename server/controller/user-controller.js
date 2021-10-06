import user from '../model/User.js';


export const addUser = async (request, response) => {

    try {
        let exist = await user.findOne({ googleId: request.body.googleId });
        if (exist) {
            response.status(200).json('user already exist');
            return;
        }
        const newUser = new user(request.body);
        await newUser.save();
        response.status(200).json("user saved successfully")
    } catch (err) {
        response.status(500).json(err);
    }

}

export const getUsers = async (resquest, response)=>{
    try{
        const users = await user.find({});
        response.status(200).json(users);
    }catch(err){
        response.status(500).json(err)
    }
}