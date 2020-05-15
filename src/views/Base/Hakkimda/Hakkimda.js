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
  Table
} from 'reactstrap';

import firebase from '../../config/hakkimda'
const Hakkimda = () => {
  const [calisilanSirket, setcalisilanSirket] = useState('')
  const [calisilanUnvan, setcalisilanUnvan] = useState('')
  const [calisilanZaman, setcalisilanZaman] = useState('')
  const [calisilanSirketTecrube, setcalisilanSirketTecrube] = useState('')
  const [calisilanSirketList, setcalisilanSirketList] = useState([])


  const [mezunOlunanOkul, setmezunOlunanOkul] = useState('')
  const [mezunOlunanBolum, setmezunOlunanBolum] = useState('')
  const [mezunOlunanYil, setmezunOlunanYil] = useState('')
  const [mezunOlunanOkulAnisi, setmezunOlunanOkulAnisi] = useState('')
  const [egitimBilgisitList, setegitimBilgisitList] = useState([])

  useEffect(() => {
    firebase.getHakkimdaIsDeneyimleri().then(((data) => {
      if (data) {
        setcalisilanSirketList(data)
      }
    }))
  }, [calisilanSirketList])

  useEffect(() => {
    firebase.getHakkimdaEgitimDeneyimleri().then(((data) => {
      if (data) {
        setegitimBilgisitList(data)
      }
    }))
  }, [egitimBilgisitList])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader className="text-center">
              <strong>Hakkımda Ayarları</strong>
            </CardHeader>

            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>

                <Row>
                  <Col xs="12" md="6">

                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>İş Deneyimleri</strong>
                    </CardHeader>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Çalışılan Şirket</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={calisilanSirket} onChange={e => setcalisilanSirket(e.target.value)} />
                        <FormText color="muted">Lütfen bu alana çalıştığınız şirket ismini giriniz.</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="text-input">Şirkette Hangi Pozisyonda Çalıştın?</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={calisilanUnvan} onChange={e => setcalisilanUnvan(e.target.value)} />
                        <FormText color="muted">Lütfen bu alana hangi pozisyonda çalıştığını yaz. Mesela <strong>Yazılım Mühendisi</strong> gibi...</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="text-input">Şirkette Ne Kadar Süre Görev Aldın?</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={calisilanZaman} onChange={e => setcalisilanZaman(e.target.value)} />
                        <FormText color="muted">Lütfen bu alana şirketteki çalışma süresini yazınız? Mesela <strong> 2014 - 2018</strong> gibi...</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="aciklama">Şirkette Edinilen Tecrübe</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <textarea
                          placeholder={calisilanSirketTecrube}
                          className="form-control"
                          name="aciklama"
                          onChange={e => setcalisilanSirketTecrube(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alan ilgi cekici ve heyecanlandırıcı bir yazı yazın.</FormText>
                      </Col>
                    </FormGroup>
                    <p className="text-center">
                      <Button onClick={ekleIsDeneyimleri} className="btn btn-success btn-lg">Ekle</Button>
                    </p>
                  </Col>

                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen İş Deneyimleri</strong>
                    </CardHeader>
                    <Table>
                      <thead>
                        <tr>
                          <th>Çalışılan Şirket</th>
                          <th>Çalışma Pozisyonu</th>
                          <th>Çalışma Süresi</th>
                          <th>Sil</th>
                        </tr>
                      </thead>

                      <tbody>
                        {calisilanSirketList.length > 0 && calisilanSirketList.map((sirket, index) => {
                          return (
                            <tr key={index} >
                              <td>{sirket.calisilanSirket}</td>
                              <td>{sirket.calisilanUnvan}</td>
                              <td>{sirket.calisilanZaman}</td>
                              <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                <hr className="bg-dark"></hr>

                <Row>
                  <Col xs="12" md="6">

                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eğitim Geçmişi</strong>
                    </CardHeader>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Mezun Olunan Okul</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={mezunOlunanOkul} onChange={e => setmezunOlunanOkul(e.target.value)} />
                        <FormText color="muted">Lütfen bu alana mezun olunan ilkokul ismini giriniz. Mesela <strong>Atatürk İlköğretim Okulu</strong> gibi...</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="text-input">Mezun Olunan Bölüm?</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={mezunOlunanBolum} onChange={e => setmezunOlunanBolum(e.target.value)} />
                        <FormText color="muted">Bu alanın sizde karşılığı yoksa boş bırakınız.</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="text-input">Mezuniyet Yılı</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={mezunOlunanYil} onChange={e => setmezunOlunanYil(e.target.value)} />
                        <FormText color="muted">Lütfen bu alana ilgili mezuniyet yılını yazınız. Mesela <strong>2002</strong> gibi...</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="aciklama">Kısaca Okulunuzundan ve O Dönemki Sizden Bahsedin</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <textarea
                          placeholder={mezunOlunanOkulAnisi}
                          className="form-control"
                          name="aciklama"
                          onChange={e => setmezunOlunanOkulAnisi(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alanda okulunuzdan ve sizden bahsedin. Kısa ve ilgi çekici olmalı.</FormText>
                      </Col>
                    </FormGroup>
                    <p className="text-center">
                      <Button onClick={ekleEgitimDeneyimi} className="btn btn-success btn-lg">Ekle</Button>
                    </p>
                  </Col>

                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen Eğitim Geçmişi</strong>
                    </CardHeader>
                    <Table>
                      <thead>
                        <tr>
                          <th>Mezun Olunan Okul</th>
                          <th>Mezu Olunan Bölüm</th>
                          <th>Mezuniyet Yılı</th>
                          <th>Sil</th>
                        </tr>
                      </thead>

                      <tbody>
                        {egitimBilgisitList.length > 0 && egitimBilgisitList.map((egitim, index) => {
                          return (
                            <tr key={index}>
                              <td>{egitim.mezunOlunanOkul}</td>
                              <td>{egitim.mezunOlunanBolum}</td>
                              <td>{egitim.mezunOlunanYil}</td>
                              <Button className="btn btn-danger btn-block mt-1">Sil</Button>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  </Col>
                </Row>

              </CardBody>

              <CardFooter>
                <Button onClick={sil} className="btn btn-danger btn-block">Sayfayı Komple Sil</Button>
              </CardFooter>

            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
  async function ekleIsDeneyimleri() {
    alert("a")
    try {
      var data = {
        calisilanSirket: calisilanSirket,
        calisilanZaman: calisilanZaman,
        calisilanUnvan: calisilanUnvan,
        calisilanSirketTecrube: calisilanSirketTecrube,
      }
      await firebase.addHakkimdaIsDeneyimi(data)

    } catch (error) {
      alert(error.message)
    }
  }

  async function ekleEgitimDeneyimi() {
    alert("b")
    try {
      var data = {
        mezunOlunanOkul: mezunOlunanOkul,
        mezunOlunanBolum: mezunOlunanBolum,
        mezunOlunanYil: mezunOlunanYil,
        mezunOlunanOkulAnisi: mezunOlunanOkulAnisi,
      }
      await firebase.addHakkimdaEgitimDeneyimi(data)

    } catch (error) {
      alert(error.message)
    }
  }

  async function sil() {
    try {
      await firebase.deleteHakkimda()
    } catch (error) {
      alert(error.message)
    }
  }
}
export default Hakkimda;
