import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MySecondComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MySecondComponent = (props: MySecondComponentProps): JSX.Element => (
  <div>
    <Text field={props.fields.heading} />
    <br></br>
    <strong>
      {' '}
      <Text field={props.fields.headingdescription} />
    </strong>
  </div>
);

export default withDatasourceCheck()<MySecondComponentProps>(MySecondComponent);
