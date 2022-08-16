import React, { useState } from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { SignInContainer, ButtonContainer } from './sign-in-form.styles'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('email is not registered')
          break
        default:
          console.log(error)
      }
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonContainer>
          <Button type='submit'>Sign in</Button>
          <Button
            type='button'
            onClick={SignInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
