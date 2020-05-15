import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  FormGroup,
  FormText,
  Label,
  Row,
} from 'reactstrap';

import firebase from '../../config/paketfiyatlar'
const Paketfiyatlar = () => {

  const [freelancerMeslek1, setfreelancerMeslek1] = useState('')
  const [freelancerFiyat1, setfreelancerFiyat1] = useState('')
  const [freelancerMeslek1OzellikA, setfreelancerMeslek1OzellikA] = useState('')

  const [freelancerMeslek2, setfreelancerMeslek2] = useState('')
  const [freelancerFiyat2, setfreelancerFiyat2] = useState('')
  const [freelancerMeslek2OzellikA, setfreelancerMeslek2OzellikA] = useState('')

  const [freelancerMeslek3, setfreelancerMeslek3] = useState('')
  const [freelancerFiyat3, setfreelancerFiyat3] = useState('')
  const [freelancerMeslek3OzellikA, setfreelancerMeslek3OzellikA] = useState('')


  useEffect(() => {
    firebase.getPaketfiyatlare().then(((data) => {
      if (data) {

      }
    }))
  })
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader className="text-center" >
              <strong>Freelancer Paket Fiyat Ayarları</strong>
            </CardHeader>

            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>

                <Row>
                  <Col xs="12" md="6">

                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>İş Deneyimleri</strong>
                    </CardHeader>

                    <p className="text-center">
                      <Button className="btn btn-success btn-lg">Ekle</Button>
                    </p>
                  </Col>

                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen İş Deneyimleri</strong>
                    </CardHeader>

                  </Col>
                </Row>

                <hr className="bg-dark"></hr>

                <Row>
                  <Col xs="12" md="6">

                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>İş Deneyimleri</strong>
                    </CardHeader>

                    <p className="text-center">
                      <Button className="btn btn-success btn-lg">Ekle</Button>
                    </p>
                  </Col>

                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen İş Deneyimleri</strong>
                    </CardHeader>

                  </Col>
                </Row>

                <hr className="bg-dark"></hr>

                <Row>
                  <Col xs="12" md="6">

                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>İş Deneyimleri</strong>
                    </CardHeader>

                    <p className="text-center">
                      <Button className="btn btn-success btn-lg">Ekle</Button>
                    </p>
                  </Col>

                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen İş Deneyimleri</strong>
                    </CardHeader>

                  </Col>
                </Row>

                <hr className="bg-dark"></hr>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Yapılan İş</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerMeslek1} onChange={e => setfreelancerMeslek1(e.target.value)} />
                    <FormText color="muted">Buraya freelancer olarak yaptığınız işi yapınız. Mesela <strong>Web Site Yapımı</strong> gibi...</FormText>
                  </Col>

                  <Col md="3">
                    <Label htmlFor="text-input">Fiyatı</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerFiyat1} onChange={e => setfreelancerFiyat1(e.target.value)} />
                    <FormText color="muted">Buraya yapılacak iş tutarını yazın. Mesela <strong>1000 TL</strong> gibi...</FormText>
                  </Col>

                  <Col md="3">
                    <Label htmlFor="text-input">Yapılan İşin Fırsatından Bahset</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerMeslek1OzellikA} onChange={e => setfreelancerMeslek1OzellikA(e.target.value)} />
                    <FormText color="muted">Buraya bu işin müşteriye sunduğu bir fırsat yazın. Mesela <strong>Admin Panelinden Yönetim</strong> gibi...</FormText>
                  </Col>

                </FormGroup>

                <hr></hr>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Yapılan İkinci Bir İş</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerMeslek2} onChange={e => setfreelancerMeslek2(e.target.value)} />
                    <FormText color="muted">Buraya freelancer olarak yaptığınız işi yapınız. Mesela <strong>Satranç Eğitmenliği</strong> gibi...</FormText>
                  </Col>

                  <Col md="3">
                    <Label htmlFor="text-input">Fiyatı</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerFiyat2} onChange={e => setfreelancerFiyat2(e.target.value)} />
                    <FormText color="muted">Buraya yapılacak iş tutarını yazın. Mesela <strong>500 TL</strong> gibi...</FormText>
                  </Col>

                  <Col md="3">
                    <Label htmlFor="text-input">Yapılan İşin Fırsatından Bahset</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerMeslek2OzellikA} onChange={e => setfreelancerMeslek2OzellikA(e.target.value)} />
                    <FormText color="muted">Buraya bu işin müşteriye sunduğu bir fırsat yazın. Mesela <strong>Satranç Kuralları</strong> gibi...</FormText>
                  </Col>

                </FormGroup>

                <hr></hr>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Yapılan Üçüncü Bir İş</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerMeslek3} onChange={e => setfreelancerMeslek3(e.target.value)} />
                    <FormText color="muted">Buraya freelancer olarak yaptığınız işi yapınız. Mesela <strong>Laptop Yazılımsal Bakımı</strong> gibi...</FormText>
                  </Col>

                  <Col md="3">
                    <Label htmlFor="text-input">Fiyatı</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerFiyat3} onChange={e => setfreelancerFiyat3(e.target.value)} />
                    <FormText color="muted">Buraya yapılacak iş tutarını yazın. Mesela <strong>50 TL</strong> gibi...</FormText>
                  </Col>

                  <Col md="3">
                    <Label htmlFor="text-input">Yapılan İşin Fırsatından Bahset</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={freelancerMeslek3OzellikA} onChange={e => setfreelancerMeslek3OzellikA(e.target.value)} />
                    <FormText color="muted">Buraya bu işin müşteriye sunduğu bir fırsat yazın. Mesela <strong>Linux / Windows Kurulumu</strong> gibi...</FormText>
                  </Col>

                </FormGroup>

              </CardBody>
              <CardFooter>
                <Button variant="success" onClick={kaydet} className="mx-4"> Kaydet</Button>
                <Button variant="danger" onClick={sil} >Sil</Button>
              </CardFooter>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
  async function kaydet() {
    try {
      var data = {

        freelancerMeslek1: freelancerMeslek1,
        freelancerFiyat1: freelancerFiyat1,
        freelancerMeslek1OzellikA: freelancerMeslek1OzellikA,

        freelancerMeslek2: freelancerMeslek2,
        freelancerFiyat2: freelancerFiyat2,
        freelancerMeslek2OzellikA: freelancerMeslek2OzellikA,

        freelancerMeslek3: freelancerMeslek3,
        freelancerFiyat3: freelancerFiyat3,
        freelancerMeslek3OzellikA: freelancerMeslek3OzellikA,

      }

      await firebase.addPaketfiyatlare(data)

    } catch (error) {
      alert(error.message)
    }
  }
  async function sil() {
    try {


      await firebase.deletePaketfiyatlare()

    } catch (error) {
      alert(error.message)
    }
  }

}

export default Paketfiyatlar;
