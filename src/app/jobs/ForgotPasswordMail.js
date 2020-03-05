import Mail from '../../lib/Mail'

import appConfig from '../../config/app'

class ForgotPasswordMail {
  get key() {
    return 'ForgotPasswordMail'
  }

  async handle({ data }) {
    const { name, code, email } = data
    const { front_url: host } = appConfig

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Recuperação de senha',
      template: 'forgotpassword',
      context: { name, code, host },
    })
  }
}

export default new ForgotPasswordMail()
