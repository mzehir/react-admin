import firebase from './config'
import { useFieldArray } from 'react-hook-form'

class Yetkinlik {

    async getYetkinlik() {
        const YetkinlikDto = await firebase.db.collection(`admin`).doc("Yetkinlik").get()
        return YetkinlikDto.get('yetkinlik')
    }

    async addYetkinlikBilgisi(data) {
        let yetkinlikDto = await this.getYetkinlik();
        if (!yetkinlikDto) {
            yetkinlikDto = [];
        }
        yetkinlikDto.push(data)
        return firebase.db.collection(`admin`).doc("Yetkinlik").set({
            "yetkinlik": yetkinlikDto
        })
    }

    deleteYetkinlik() {
        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        return firebase.db.collection(`admin`).doc("Yetkinlik").delete()
    }


}




export default new Yetkinlik()