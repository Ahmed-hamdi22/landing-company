import React from 'react'
import { Colortitel,Form,Input, Regist,Titel,Text,Regist2, Text2,Btn } from './Registyle'

const Register = () => {
  return (
    <Regist>
      <div className='container'>
        <Regist2>
            <div style={{width:"58%"}}>
            
        <Titel>Register</Titel>
        <Colortitel>Here</Colortitel>
        <Text>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component</Text>
        <Text2>React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component</Text2>

        </div>
    <Form style={{width:"38%"}}>
    <   Input type="text" placeholder='first name'></  Input>
    <   Input type="text" placeholder='lastname'></    Input>
    <   Input type="number" placeholder='number'></    Input>
    <   Input type="email" placeholder='email'></  Input>
        <Btn> Register</Btn>
    </Form>
        </Regist2>
      </div>
    </Regist>

  )
}

export default Register
