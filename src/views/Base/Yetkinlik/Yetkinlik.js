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

import firebase from '../../config/yetkinlik'
const Yetkinlik = () => {

  const [yetkinAlanİsmi, setyetkinAlanİsmi] = useState('')
  const [yetkinAlanBilgisi, setyetkinAlanBilgisi] = useState('')
  const [yetkinAlanFotograf, setyetkinAlanFotograf] = useState('')
  const [yetkinlikList, setyetkinlikList] = useState([])

  useEffect(() => {
    firebase.getYetkinlik().then(((data) => {
      debugger
      if (data) {
        setyetkinlikList(data)
      }
    }))
  }, [yetkinlikList])
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" md="12">
          <Card>

            <CardHeader className="text-center">
              <strong>Yetkinlik Ayarları</strong>
            </CardHeader>

            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>

                <Row>
                  <Col xs="12" md="6" className="mb-3">

                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Yetkinlik Ekleme Kısmı</strong>
                    </CardHeader>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Yetkin Olunan Bir Alan</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="okul" name="okul" autoComplete="off" defaultValue={yetkinAlanİsmi} onChange={e => setyetkinAlanİsmi(e.target.value)} />
                        <FormText color="muted">Buraya yetkin olduğunuz bir alan yazınız. Mesela <strong>React.JS</strong> gibi...</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="aciklama">Yetkin Olduğunuz Alan İle İlgili Kendinizden Bahsedin.</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <textarea
                          placeholder={yetkinAlanBilgisi}
                          className="form-control"
                          name="aciklama"
                          onChange={e => setyetkinAlanBilgisi(e.target.value)}
                        />
                        <FormText color="muted">Lütfen burada yetkin olduğunuz alan ile ilgili kendinizden bahsedin.</FormText>
                      </Col>

                      <Col md="3">
                        <Label htmlFor="text-input">Fotoğraf Yükleyiniz.</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input id="okul" name="okul" autoComplete="off" defaultValue={yetkinAlanFotograf} onChange={e => setyetkinAlanFotograf(e.target.value)} />
                        <FormText color="muted">Yetkin olduğunuz alanı tanımlayan bir ikon yükleyiniz.</FormText>
                      </Col>
                    </FormGroup>

                    <p className="text-center">
                      <Button onClick={ekle} className="btn btn-success btn-lg">Ekle</Button>
                    </p>

                  </Col>

                  <Col xs="12" md="6">
                    <CardHeader className="shadow-lg p-3 mb-5 bg-dark rounded">
                      <strong>Eklenen Yetenek Ve Tecrübeler</strong>
                    </CardHeader>
                    <Table>
                      <thead>
                        <tr>
                          <th>Yetkinlik Konusu</th>
                          <th>Yetkinlik Hakkında</th>
                          <th>Sil</th>
                        </tr>
                      </thead>

                      <tbody>
                        {yetkinlikList.length > 0 && yetkinlikList.map((yetkinlik, index) => {
                          return (
                            <tr key={index} >
                              <td>{yetkinlik.yetkinAlanİsmi}</td>
                              <td>{yetkinlik.yetkinAlanBilgisi}</td>
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
  async function ekle() {
    try {
      var data = {
        yetkinAlanİsmi: yetkinAlanİsmi,
        yetkinAlanBilgisi: yetkinAlanBilgisi,
        yetkinAlanFotograf: yetkinAlanFotograf,
      }
      await firebase.addYetkinlikBilgisi(data)
    } catch (error) {
      alert(error.message)
    }
  }
  async function sil() {
    try {
      await firebase.deleteYetkinlik()
    } catch (error) {
      alert(error.message)
    }
  }

}
export default Yetkinlik;
