import { connect } from "mongoose";
import { URI } from "../config/config.js";

export const dbConnection = async () => {
    try {
        await connect(URI);
        console.log('Base de Datos Conectada Exitosamente');
    } catch (err) {
        console.log('Error al conectar a DB', err);
        process.exit();
    }
} 
