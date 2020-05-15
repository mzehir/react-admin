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
  Table,
  Row,
} from 'reactstrap';

import firebase from '../../config/egitim'
const Egitim = () => {
 
  const [okul, setokul] = useState('')
  const [adress, setadress] = useState('')
  const [zaman, setzaman] = useState('')
  const [okulAciklama, setokulAciklama] = useState('')
  const [egitimList, setEgitimList] = useState([])

  useEffect(() => {
    firebase.getEgitime().then(((data) => {
      if (data) { 
        setEgitimList(data)
      }
    }))
  },[egitimList])


  return (
    <div className="animated fadeIn">

      <Row>
        <Col xs="12" md="6">
          <Card>
            <CardHeader>
              <strong>Eğitimler</strong>
            </CardHeader>
            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Okul</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="okul" name="okul" autoComplete="off" defaultValue={okul} onChange={e => setokul(e.target.value)} />
                    <FormText color="muted">Okul</FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="adress">Adres</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <input
                      defaultValue={adress}
                      className="form-control"
                      name="adress"
                      onChange={e => setadress(e.target.value)}
                    />
                    <FormText color="muted">Adres</FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="zaman">Zaman</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <input
                      defaultValue={zaman}
                      className="form-control"
                      name="zaman"
                      onChange={e => setzaman(e.target.value)}
                    />
                    <FormText color="muted">Zaman</FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="okulAciklama">Okul Açıklama</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <textarea
                      placeholder={okulAciklama}
                      className="form-control"
                      name="okulAciklama"
                      onChange={e => setokulAciklama(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button variant="success" onClick={kaydet} className="mx-4"> Kaydet</Button>
              
              </CardFooter>
            </form>
          </Card>

        </Col>
        <Col xs="12" md="6">
          <Table striped bordered hover>
            <thead>
              <tr> 
                <th>Okul</th>
                <th>Adres</th>
                <th>Zaman</th>
                <th>Okul Açıklama</th>
              </tr>
            </thead>

            <tbody>
              {egitimList.length>0 && egitimList.map((person, index)=> {
            
                return (
                  <tr key={index} >
                    <td>{person.okul}</td>
                    <td>{person.adress}</td>
                    <td>{person.zaman}</td>
                    <td>{person.okulAciklama}</td>
                    <Button variant="danger" onClick={silEgitim(index)} >Sil</Button>
                  </tr>
 
                )
              })}
            
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
  async function kaydet() {
    try {
      var data = {
        okul: okul,
        adress: adress,
        zaman: zaman,
        okulAciklama: okulAciklama,
      }
      await firebase.addEgitime(data);
     


    } catch (error) {
      alert(error.message)
    }
  }
  async function silEgitim() {
    try {


      await firebase.deleteEgitime()

    } catch (error) {
      alert(error.message)
    }
  }

}

export default Egitim;
