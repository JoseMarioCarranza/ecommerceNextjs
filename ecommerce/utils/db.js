// Conexión a la base de datos
import mongoose from 'mongoose'

const connection = {}

async function connect() {
    if (connection.isconnected) {
        console.log('Conexión Exitosa 🚀');
        return
    }
    if (mongoose.connection.length > 0) {
        connection.isconnected = mongoose.connections[0].readyState
        if (connection.isconnected === 1) {
            console.log('Usuario ya conectado 💻');
            return
        }
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log('nueva conexicon 😁');
    }
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production')
            await mongoose.disconnect()
        connection.isConnected = false
    } else {
        console.log('conectado 💻');
    }
}

function convertDocToObjc() {

}

const db = { connect, disconnect, convertDocToObjc }

export default db