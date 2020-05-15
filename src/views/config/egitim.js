import firebase from './config'
import { useFieldArray } from 'react-hook-form'

class Egitim {
    async getEgitime() {
        const egitimData = await firebase.db.collection('admin').doc('Egitim').get()
        return egitimData.get('egitim')
    }
    
    async addEgitime(data) {
        let egitim = await this.getEgitime();
        if (!egitim) {
            egitim = [];
        }
        egitim.push(data)
        return firebase.db.collection("admin").doc('Egitim').set({
            'egitim': egitim
        })
    }

    deleteEgitime() {
        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        return firebase.db.collection(`admin`).doc("egitims").delete()
    }
}

export default new Egitim()