import mongoose from 'mongoose'; 
mongoose.set('useCreateIndex', true); mongoose.set('useFindAndModify', false);


async function connect(){

    try{

       await mongoose.connect('mongodb://localhost:27017/socketDB',
        {useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true})
        .then(() => {
            console.log("La conexion a la base de datos es correcta.");
        })
        .catch(err => {
            console.log("Error de conección: ", err);
            return process.exit(1);
          });

    }catch {
        console.log('Error')
    }
}


export default connect;