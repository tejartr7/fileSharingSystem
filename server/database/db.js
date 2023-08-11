import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
    const user = process.env.user;
    const pass = process.env.pass;
    const URL = `mongodb://ram:ram@ac-axmz980-shard-00-00.mu1nota.mongodb.net:27017,ac-axmz980-shard-00-01.mu1nota.mongodb.net:27017,ac-axmz980-shard-00-02.mu1nota.mongodb.net:27017/?ssl=true&replicaSet=atlas-4evwg0-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('db connected congo!!!!');
    } catch (error) {
        console.log('error in connection:', error);
    }
};

export default connection;
