import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { WithTranslation, withTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Form } from './styles';
interface CustomFormProps extends WithTranslation {
  children: JSX.Element | JSX.Element[];
  customFormStyle?: React.CSSProperties;
  handleSubmit: (data: unknown) => void;
  schema: yup.ObjectSchema<any>;
}

const CustomForm: React.FC<CustomFormProps> = ({
  children,
  customFormStyle,
  handleSubmit,
  schema,
}) => {
  const methods = useForm<FieldValues>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  useEffect(() => {
    console.log(methods);
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <Form
        style={customFormStyle}
        onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default withTranslation()(CustomForm);
