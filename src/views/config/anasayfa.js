import firebase from './config'
import { useFieldArray } from 'react-hook-form'


class Anasayfa {

    async getAnaSayfa() {
        let cityRef = await firebase.db.collection('admin').doc('AnaSayfa');
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

    // ###########################      Kişisel Bilgiler         ###################################
    // ###########################      Kişisel Bilgiler         ###################################
    // ###########################      Kişisel Bilgiler         ###################################
    async addAnasayfaKisiselBilgi(KişiselBilgiler) {
        let anaSayfaDto = await this.getAnaSayfa();
        // if (anaSayfaDto && anaSayfaDto.KişiselBilgiler) {
        if (anaSayfaDto) {
            return firebase.db.collection(`admin`).doc("AnaSayfa").update({
                KişiselBilgiler
            })
        }
        else {
            return firebase.db.collection(`admin`).doc("AnaSayfa").set({
                KişiselBilgiler
            })
        }
    }
    // ###########################       Hakkımda                ###################################
    // ###########################       Hakkımda                ###################################
    // ###########################       Hakkımda                ###################################
    async addAnasayfaHakkimda(Hakkımda) {
        let hakkimdaDto = await this.getAnaSayfa();
        // if (anaSayfaDto && anaSayfaDto.KişiselBilgiler) {
        if (hakkimdaDto) {
            return firebase.db.collection(`admin`).doc("AnaSayfa").update({
                Hakkımda
            })
        }
        else {
            return firebase.db.collection(`admin`).doc("AnaSayfa").set({
                Hakkımda
            })
        }
    }
    // ###########################     Yetenek ve Tecrübeler     ###################################
    // ###########################     Yetenek ve Tecrübeler     ###################################
    // ###########################     Yetenek ve Tecrübeler     ###################################
    async getYetenek() {
        const form = await firebase.db.collection('admin').doc('AnaSayfa').get()
        return form.get('yetenek')
    }

    async addYetenek(data) {
        let anaSayfaDto = await this.getAnaSayfa();
        let yetenekDto = await this.getYetenek();
        debugger

        if (!anaSayfaDto) {
            let yetenek = [];
            yetenek.push(data)
            return firebase.db.collection('admin').doc('AnaSayfa').set({
                yetenek
            })
        } else if (anaSayfaDto && !yetenekDto) {
            let yetenek = [];
            yetenek.push(data)
            return firebase.db.collection('admin').doc('AnaSayfa').update({
                yetenek
            })
        } else {
            let yetenek = []
            yetenekDto.push(data)
            for (let i = 0; i < yetenekDto.length; i++) {
                yetenek.push(yetenekDto[i])

            }
            return firebase.db.collection('admin').doc('AnaSayfa').update({
                yetenek
            })
        }

    }

     deleteYetenekVeYuzde(data) {
       
       
    }

    // ###########################     Anasayfa Dökümanını Silme       ###################################
    // ###########################     Anasayfa Dökümanını Silme       ###################################
    // ###########################     Anasayfa Dökümanını Silme       ###################################
    deleteAnasayfa() {
        if (!firebase.auth.currentUser) {
            return alert('Not authorized')
        }
        return firebase.db.collection(`admin`).doc("AnaSayfa").delete()
    }

}


export default new Anasayfa()