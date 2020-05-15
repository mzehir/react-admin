import firebase from './config'
import { useFieldArray } from 'react-hook-form'

class Hakkimda {

    async getHakkimda() {
        let cityRef = await firebase.db.collection('admin').doc('Hakkımda');
        return await cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    var data = doc.data();
                    return data
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    async getHakkimdaIsDeneyimleri() {
        const isDeneyimleriList = await firebase.db.collection('admin').doc('Hakkımda').get()
        return isDeneyimleriList.get('isDeneyimiList')
    }

    async getHakkimdaEgitimDeneyimleri() {
        const egitimDeneyimleriList = await firebase.db.collection('admin').doc('Hakkımda').get()
        return egitimDeneyimleriList.get('egitimDeneyimiList')
    }

    // **************************************************************************************** //

    async addHakkimdaIsDeneyimi(data) {
        let hakkimdaDto = await this.getHakkimda();
        let isDeneyimleriDto = await this.getHakkimdaIsDeneyimleri();
        debugger
        if (!hakkimdaDto) {
            let isDeneyimiList = [];
            isDeneyimiList.push(data)
            return firebase.db.collection('admin').doc('Hakkımda').set({
                isDeneyimiList
            })
        } else if (hakkimdaDto && !isDeneyimleriDto) {
            let isDeneyimiList = [];
            isDeneyimiList.push(data)
            return firebase.db.collection('admin').doc('Hakkımda').update({
                isDeneyimiList
            })
        } else {
            let isDeneyimiList = [];
            isDeneyimleriDto.push(data)
            for (let i = 0; i < isDeneyimleriDto.length; i++) {
                isDeneyimiList.push(isDeneyimleriDto[i])
            }
            return firebase.db.collection('admin').doc('Hakkımda').update({
                isDeneyimiList
            })
        }
    }


    async addHakkimdaEgitimDeneyimi(data) {
        let hakkimdaDto = await this.getHakkimda();
        let egitimDeneyimleriDto = await this.getHakkimdaEgitimDeneyimleri();
        debugger
        if (!hakkimdaDto) {
            let egitimDeneyimiList = [];
            egitimDeneyimiList.push(data)
            return firebase.db.collection('admin').doc('Hakkımda').set({
                egitimDeneyimiList
            })
        } else if (hakkimdaDto && !egitimDeneyimleriDto) {
            let egitimDeneyimiList = [];
            egitimDeneyimiList.push(data)
            return firebase.db.collection('admin').doc('Hakkımda').update({
                egitimDeneyimiList
            })
        } else {
            let egitimDeneyimiList = [];
            egitimDeneyimleriDto.push(data)
            for (let i = 0; i < egitimDeneyimleriDto.length; i++) {
                egitimDeneyimiList.push(egitimDeneyimleriDto[i])
            }
            return firebase.db.collection('admin').doc('Hakkımda').update({
                egitimDeneyimiList
            })
        }
    }


    deleteHakkimda() {

        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        return firebase.db.collection(`admin`).doc("Hakkımda").delete()
    }
}

export default new Hakkimda()