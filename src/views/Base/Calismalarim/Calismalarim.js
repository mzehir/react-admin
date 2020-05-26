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

// import firebase from '../../config/iletisim'
const Calismalarim = () => {

  // const [adres, setadres] = useState('')
  // const [gsm, setgsm] = useState('')

  // useEffect(() => {
  //   firebase.getIletisim().then(((data) => {
  //     if (data) {
  //       setadres(data.adres)
  //       setgsm(data.gsm)
  //     }
  //   }))
  // }, [])
  return (
    <div className="animated fadeIn">
      <h2 className="text-center">BU SAYFA BAKIM ÇALIŞMASINDADIR. BU SAYFADA ÇALIŞMALARIMLA ALAKALI BİLGİLER ALINACAKTIR.</h2>
      {/* <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader className="text-center">
              <strong >İletişim Sayfa Ayarları</strong>
            </CardHeader>
            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>
                <Row>
                  <Col xs="12" md="12">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>İletişim Ayarları</strong>
                    </CardHeader>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Adres</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <textarea className="form-control" id="okul" name="okul" autoComplete="off" defaultValue={adres} onChange={e => setadres(e.target.value)} />

                        <FormText color="muted">Buraya iş adresinizi ya da kendinize ait bir adresi yazınız. </FormText>
                      </Col>
                    </FormGroup>

                    <hr className="bg-primary"></hr>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Telefon Numarası</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="okul" name="okul" autoComplete="off" defaultValue={gsm} onChange={e => setgsm(e.target.value)} />

                        <FormText color="muted">Buraya müşterilerin size ulaşabileceği bir telefon numarası yazınız. </FormText>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="text-center">
                <Button onClick={kaydet} className="btn btn-success btn-lg mx-4"> Kaydet</Button>
                <Button onClick={sil} className="btn btn-danger btn-lg mx-4">Sil</Button>
              </CardFooter>
            </form>
          </Card>

        </Col>

      </Row> */}
    </div>
  );
  // async function kaydet() {
  //   try {
  //     var data = {
  //       adres: adres,
  //       gsm: gsm,
  //     }
  //     await firebase.addIletisim(data)
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

  // async function sil() {
  //   try {
  //     await firebase.deleteIletisim()
  //   } catch (error) {
  //     alert(error.message)
  //   }
  // }

}
export default Calismalarim;
