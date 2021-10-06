import mongoose from 'mongoose';



const Connection = async () => {
    try {
        const URL = `mongodb+srv://aman:amannigam@chatapp.ffo7k.mongodb.net/WHATSAPP?retryWrites=true&w=majority`
        
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('database connection successfully!!!!')
    } catch (error) {
        console.log('error while connecting to mongodb', error)
    }

}
export default Connection;
