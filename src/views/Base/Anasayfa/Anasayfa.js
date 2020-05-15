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

import firebase from '../../config/anasayfa'
const Anasayfa = () => {
  const [Meslek, setMeslek] = useState('')
  const [email, setemail] = useState('')
  const [telefonNo, settelefonNo] = useState('')
  const [isimSoyİsim, setisimSoyİsim] = useState('')
  const [carouselMeslekBilgisi, setcarouselMeslekBilgisi] = useState('')
  const [carouselMeslekBilgisi2, setcarouselMeslekBilgisi2] = useState('')
  const [carouselMeslekBilgisi3, setcarouselMeslekBilgisi3] = useState('')
  const [onYazi, setonYazi] = useState('')

  const [yetenekDali, setyetenekDali] = useState('')
  const [yetenekYuzdesi, setyetenekYuzdesi] = useState('')

  const [yetenekDalVeYuzdeList, setyetenekDalVeYuzdeList] = useState([])


  useEffect(() => {
    firebase.getYetenek().then(((data) => {

      if (data) {
        setyetenekDalVeYuzdeList(data)
      }
    }))
  }, [yetenekDalVeYuzdeList])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader className="text-center mb-3">
              <strong >Anasayfa Ayarları</strong>
            </CardHeader>

            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>

                <Row>
                  <Col className="" xs="12" md="12">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Kişisel Bilgiler</strong>
                    </CardHeader>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Meslek</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue={Meslek} onChange={e => setMeslek(e.target.value)} />
                        <FormText color="muted">Lütfen bu alana meslek bilginizi giriniz. Mesela <strong>Yazılım Mühendisi</strong> gibi...</FormText>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="email-input">Email</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue={email}
                          className="form-control"
                          name="email"
                          onChange={e => setemail(e.target.value)}
                        />
                        <FormText className="help-block">Lütfen bu alana email adresinizi giriniz. Mesela <strong>deneme@gmail.com</strong> gibi... </FormText>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="telefon">Telefon</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue={telefonNo}
                          className="form-control"
                          name="adress"
                          onChange={e => settelefonNo(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana telefon numaranızı giriniz. Mesela <strong>0 541 999 9999</strong> gibi...</FormText>
                      </Col>
                    </FormGroup>
                    {/* **************************************************************************************************************************** */}

                    {/* Buraya kullanıcının sosyal medya adresleri eklenek */}

                    {/* Buraya kullanıcının sosyal medya adresleri eklenek */}

                    {/* **************************************************************************************************************************** */}

                    {/* Buraya kullanıcının fotoğrafı gelecek */}

                    {/* Buraya kullanıcının fotoğrafı gelecek */}

                    {/* **************************************************************************************************************************** */}
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Ad ve Soyad</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue={isimSoyİsim}
                          className="form-control"
                          name="telefon"
                          onChange={e => setisimSoyİsim(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana adınızı ve soyadınızı giriniz. Mesela <strong>Ahmet Yılmaz</strong> gibi...</FormText>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Meslek  Alt Dalı</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue=""
                          className="form-control"
                          type="carouselMeslekBilgisi"
                          name="carouselMeslekBilgisi"
                          onChange={e => setcarouselMeslekBilgisi(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana mesleğinizi tanımlayan bir sıfat, belirteç giriniz. Mesela bilgisayar mühendisi için <strong>Web Tasarımcı</strong> gibi... </FormText>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Meslek  Alt Dalı 2</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue=""
                          className="form-control"
                          type="carouselMeslekBilgisi2"
                          name="carouselMeslekBilgisi2"
                          onChange={e => setcarouselMeslekBilgisi2(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana mesleğinizi tanımlayan bir sıfat, belirteç giriniz. Mesela bilgisayar mühendisi için <strong>Mobil Programcı</strong> gibi...</FormText>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Meslek  Alt Dalı 3  </Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue=""
                          className="form-control"
                          type="carouselMeslekBilgisi3"
                          name="carouselMeslekBilgisi3"
                          onChange={e => setcarouselMeslekBilgisi3(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana mesleğinizi tanımlayan bir sıfat, belirteç giriniz. Mesela bilgisayar mühendisi için <strong>SEO Uzmanı</strong> gibi...</FormText>
                      </Col>
                    </FormGroup>

                    {/* **************************************************************************************************************************** */}

                    {/* Buraya kullanıcı cvsini ekleyecek  */}

                    {/* Buraya kullanıcı cvsini ekleyecek */}

                    {/* **************************************************************************************************************************** */}

                    <p className="text-center">
                      <Button className="btn btn-success mb-3 text-center btn-lg" onClick={kaydetKisiselBilgi}>Kaydet</Button>
                    </p>
                  </Col>
                </Row>

                <hr className="bg-dark"></hr>

                <Row>
                  <Col xs="12" md="6" className="mb-3">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Yetenek ve Tecrübeler</strong>
                    </CardHeader>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="baslik">Meslekte Yetenek / Tecrübe Sahibi Olunan Bir Dal</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue=""
                          className="form-control"
                          name="yetenekDali"
                          onChange={e => setyetenekDali(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana meslek içinde hakim olduğunuz bir alt dal yazınız. Mesela bilgisayar mühendisi için <strong>HTML</strong> gibi...</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="baslik">Hakimiyet Yüzdesi</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <input
                          defaultValue=""
                          className="form-control"
                          name="yetenekYuzdesi"
                          onChange={e => setyetenekYuzdesi(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana hakim olduğunuz dala ne kadar hakimseniz % üzerinden belirtiniz. Mesela <strong>70</strong> gibi...</FormText>
                      </Col>
                    </FormGroup>
                    <p className="text-center">
                      <Button onClick={ekleYetenekVeYuzde} className="btn btn-success btn-lg">Ekle</Button>
                    </p>

                  </Col>
                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen Yetenek Ve Tecrübeler</strong>
                    </CardHeader>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Yetenek</th>
                          <th>Yüzdesi</th>
                          <th>Sil</th>
                        </tr>
                      </thead>

                      <tbody>
                        {yetenekDalVeYuzdeList.length > 0 && yetenekDalVeYuzdeList.map((person, index) => {
                          return (
                            <tr key={index}>
                              <td>{person.yetenekDali}</td>
                              <td>{person.yetenekYuzdesi}</td>
                              <Button onClick={() => silYetenekVeYuzde(index)} className="btn btn-danger btn-block mt-1">Sil</Button>
                            </tr>
                          )
                        })}
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                <hr className="bg-dark"></hr>

                <Row>
                  <Col xs="12" md="12">
                    <CardHeader className="shadow-lg p-3 mb-3 bg-dark rounded">
                      <strong>Hakkımda (Ön Yazı)</strong>
                    </CardHeader>

                    <br></br>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="aciklama">Lütfen Kendinizden Bahsedin</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <textarea
                          placeholder={onYazi}
                          className="form-control"
                          name="aciklama"
                          onChange={e => setonYazi(e.target.value)}
                        />
                        <FormText color="muted">Lütfen bu alana sizi anlatan bir ön yazı giriniz.</FormText>
                      </Col>
                    </FormGroup>
                    <p className="text-center">
                      <Button className="btn btn-success btn-lg" onClick={kaydetHakkimda}>Kaydet</Button>
                    </p>
                  </Col>
                </Row>

              </CardBody>

              <CardFooter>
                <Button className="btn btn-danger btn-block" onClick={silTumSayfa} >Sayfayı Komple Sil</Button>
              </CardFooter>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );

  async function kaydetKisiselBilgi() {
    try {
      var data = {
        Meslek: Meslek,
        email: email,
        telefonNo: telefonNo,
        isimSoyİsim: isimSoyİsim,
        carouselMeslekBilgisi: carouselMeslekBilgisi,
        carouselMeslekBilgisi2: carouselMeslekBilgisi2,
        carouselMeslekBilgisi3: carouselMeslekBilgisi3,
      }
      await firebase.addAnasayfaKisiselBilgi(data)
      console.log(data)
    } catch (error) {
      alert(error.message)
    }
  }

  async function kaydetHakkimda() {
    try {
      var data = {
        onYazi: onYazi,
      }
      await firebase.addAnasayfaHakkimda(data)
    } catch (error) {
      alert(error.message)
    }
  }

  async function ekleYetenekVeYuzde() {
    try {
      var data = {
        yetenekDali: yetenekDali,
        yetenekYuzdesi: yetenekYuzdesi
      }
      await firebase.addYetenek(data)
    } catch (error) {
      alert(error.message)
    }
  }

  async function silYetenekVeYuzde(index) {
    try {
      var data = index
      await firebase.deleteYetenekVeYuzde(data)
    } catch (error) {
      alert(error.message)
    }
  }
}

async function silTumSayfa() {
  try {
    await firebase.deleteAnasayfa()
  } catch (error) {
    alert(error.message)
  }
}

export default Anasayfa;
