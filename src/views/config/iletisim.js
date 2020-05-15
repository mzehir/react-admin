import firebase from './config'
import { useFieldArray } from 'react-hook-form'


class Iletisim {

    
    async getIletisim() {
        const iletisimDto = await firebase.db.collection(`admin`).doc("İletişim").get()
        return iletisimDto.get('İletişim Bilgileri')
    }

    async addIletisim(data) {
        let deneme = await this.getIletisim()

        if (!deneme) {
            return firebase.db.collection(`admin`).doc("İletişim").set({
                "İletişim Bilgileri": data
            })
        } else {
            return firebase.db.collection(`admin`).doc("İletişim").update({
                "İletişim Bilgileri": data
            })
        }
    }

    deleteIletisim() {

        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        return firebase.db.collection(`admin`).doc("İletişim").delete()
    }

}
export default new Iletisim()