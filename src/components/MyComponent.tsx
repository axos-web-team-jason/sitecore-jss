import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MyComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MyComponent = (props: MyComponentProps): JSX.Element => (
  <div>
    <p>MyComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<MyComponentProps>(MyComponent);
