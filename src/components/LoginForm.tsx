import React from "react";
import { ButtonX, FormX, TextInputX, ValidatorX } from "swxform";

class LoginForm extends React.Component {
    render(): React.ReactNode {
        return <FormX onSubmit={(data: any) => { console.log(data) }} style={{  paddingHorizontal: 10 }}>
            <TextInputX name="username" placeholder="Your E-Mail" validators={[ValidatorX.email]} />
            <TextInputX name="password" placeholder="Password" secureTextEntry={true} />
            <ButtonX title="Submit" color={'green'} style={{ container: { marginTop: 20 } }} />
        </FormX>
    }
}

export default LoginForm;