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

import firebase from '../../config/iletisim'
const Iletisim = () => {

  const [adres, setadres] = useState('')
  const [gsm, setgsm] = useState('')

  useEffect(() => {
    firebase.getIletisime().then(((data) => {

      if (data) {
        setadres(data.adres)
        setgsm(data.gsm)
      }

    }))
  })
  return (
    <div className="animated fadeIn">

      <Row>
        <Col xs="12" md="6">
          <Card>
            <CardHeader>
              <strong>İletişim Bilgileri</strong>
            </CardHeader>
            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Adres</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={adres} onChange={e => setadres(e.target.value)} />

                    <FormText color="muted">Buraya iş adresinizi ya da kendinize ait bir adresi yazınız. </FormText>
                  </Col>
                </FormGroup>

                <hr></hr>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Telefon Numarası</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={gsm} onChange={e => setgsm(e.target.value)} />

                    <FormText color="muted">Buraya müşterilerin size ulaşabileceği bir telefon numarası yazınız. </FormText>
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
        adres: adres,
        gsm: gsm,
      }

      await firebase.addIletisime(data)

    } catch (error) {
      alert(error.message)
    }
  }
  async function sil() {
    try {


      await firebase.deleteIletisime()

    } catch (error) {
      alert(error.message)
    }
  }

}

export default Iletisim;
