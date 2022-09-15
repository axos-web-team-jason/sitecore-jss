import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TertiaryBlockContainerProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const TertiaryBlockContainer = (props: TertiaryBlockContainerProps): JSX.Element => (
  <div>
    {/* {props.fields.blocks.map((item, id) => {
      return <div key={id}>{item}</div>;
    })} */}
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<TertiaryBlockContainerProps>(TertiaryBlockContainer);
