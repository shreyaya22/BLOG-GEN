import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://ekeshwaraditya:94hVKE8xZA9NkLHd@bloggie.hlul4gk.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;