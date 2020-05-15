import firebase from './config'
import { useFieldArray } from 'react-hook-form'


class Iletisim {
    addIletisime(data) {

        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        debugger
        return firebase.db.collection(`admin`).doc("iletisims").set({
            data
        })
    }

    deleteIletisime() {

        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }

        return firebase.db.collection(`admin`).doc("iletisims").delete()
    }

    async getIletisime() {
        const iletisim = await firebase.db.collection(`admin`).doc("iletisims").get()
        debugger
        return iletisim.get('data')
    }

}




export default new Iletisim()