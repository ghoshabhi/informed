import React from 'react';
import readme from './README.md';
import withDocs from '../../../utils/withDocs';

import { Form, Input, Debug } from '../../../../src';

const FormApi = () => (
  <Form id="form-api-form">
    {({ formApi }) => (
      <div>
        <Input name="name" label="First name:" />
        <button type="button" onClick={() => formApi.setValue('name', 'Joe')}>
          Set Name to "Joe"
        </button>
        <button type="button" onClick={() => formApi.setValue('name', 'Kevin')}>
          Set Name to "Kevin"
        </button>
        <button type="button" onClick={() => formApi.reset()}>
          Reset
        </button>
        <button type="button" onClick={() => formApi.setValue('foo', 'Bar')}>
          Set Foo to "Bar"
        </button>
        <button type="submit">Submit</button>
        <Debug />
      </div>
    )}
  </Form>
);

export default withDocs(readme, FormApi);
