import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useLazyGetAddressQuery } from '../../../data/endpoints/addressApi';
import { InputType } from '../../../domain/enums/input';
import CustomButton from '../../components/custom-button';
import CustomForm from '../../components/custom-form';
import CustomInput from '../../components/custom-input';
import CustomScreen from '../../components/custom-screen';

interface LoginProps extends WithTranslation {}

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ t }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('global.fieldErrors.invalidEmail'))
      .required(t('global.fieldErrors.required')),
    password: yup.string().required(t('global.fieldErrors.required')),
  });

  const [getAdrress, { isFetching }] = useLazyGetAddressQuery();

  const handleSubmit = async (data: unknown): Promise<void> => {
    const loginData = data as LoginData;
    await getAdrress(loginData.password);
  };

  return (
    <CustomScreen screenTitle="Login">
      <CustomForm schema={schema} handleSubmit={handleSubmit}>
        <CustomInput
          inputName="email"
          type={InputType.TEXT}
          placeholder={t('global.placeholders.email')}
          label={t('global.placeholders.email')}
        />
        <CustomInput
          inputName="password"
          label={t('global.placeholders.password')}
          placeholder={t('global.placeholders.password')}
          type={InputType.TEXT}
        />
        <CustomButton text="Entrar" isLoading={isFetching} />
      </CustomForm>
    </CustomScreen>
  );
};

export default withTranslation()(Login);
