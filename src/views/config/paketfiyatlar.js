import firebase from './config'
import { useFieldArray } from 'react-hook-form'

class Paketfiyatlar {
    addPaketfiyatlare(data) {
        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        debugger
        return firebase.db.collection(`admin`).doc("paketfiyatlars").set({
            data
        })
    }

    deletePaketfiyatlare() {
        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        return firebase.db.collection(`admin`).doc("paketfiyatlars").delete()
    }
    async getPaketfiyatlare() {
        const paketfiyatlar = await firebase.db.collection(`admin`).doc("paketfiyatlars").get()
        debugger
        return paketfiyatlar.get('data')
    }
}
export default new Paketfiyatlar()