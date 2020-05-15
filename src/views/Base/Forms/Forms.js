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
  Table,
} from 'reactstrap';

import firebase from '../../config/forms'
const Forms = () => {
  const [Meslek, setMeslek] = useState('')
  const [email, setemail] = useState('')
  const [formList, setformList] = useState([])

  useEffect(() => {
    firebase.getForm().then(((data) => {
      if (data) {
        setformList(data)
      }
    }))
  },[formList])

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" md="8">
          <Card>
            <CardHeader>
              <strong>Kişisel Bilgiler</strong>
            </CardHeader>

            <form onSubmit={e => e.preventDefault() && false}>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Meslek</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input id="Meslek" name="Meslek" autoComplete="off" defaultValue="" onChange={e => setMeslek(e.target.value)} />
                    <FormText color="muted">Lütfen Bu Alana Meslek Bilginizi Giriniz</FormText>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="email-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <input
                      defaultValue=""
                      className="form-control"
                      name="email"
                      onChange={e => setemail(e.target.value)}
                    />
                    <FormText className="help-block">Lütfen Bu Alana Email Adresinizi Giriniz</FormText>
                  </Col>
                </FormGroup>

              </CardBody>
              <CardFooter>
                <Button variant="success" onClick={kaydet} className="mx-4"> Kaydet</Button>
                <Button variant="danger" onClick={sil}>Sil</Button>
              </CardFooter>
            </form>
          </Card>
        </Col>

        <Col xs="12" md="4">
          <Table striped bordered hover>
            <thead>
              <tr> 
                <th>Okul</th>
                <th>Adres</th>
              </tr>
            </thead>

            <tbody>
              {formList.length>0 && formList.map((person, index)=> {
                return (
                  <tr key={index} >
                    <td>{person.Meslek}</td>
                    <td>{person.email}</td>
                    <Button variant="danger" >Sil</Button>
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
        Meslek: Meslek,
        email: email,
      }
      await firebase.addForm(data)

    } catch (error) {
      alert(error.message)
    }
  }
  async function sil() {
    try{
      await firebase.deleteFormse()
    } catch (error) {
      alert(error.message)
    }
  }

}
export default Forms;
