import firebase from './config'

class Forms {


    async getForm() {
        const form = await firebase.db.collection('admin').doc('formPage').get()
        return form.get('formlar')
    }

    async addForm(data) {
        let formlar = await this.getForm();
        if (!formlar) {
            formlar = [];
        }
        formlar.push(data)
        return firebase.db.collection(`admin`).doc("formPage").set({
            'formlar': formlar
        })
    }
    deleteFormse() {
        if (!firebase.auth.currentUser) {
            return alert('Not authorized.')
        }
        return firebase.db.collection('admin').doc('formPage').delete
    }
}

export default new Forms()