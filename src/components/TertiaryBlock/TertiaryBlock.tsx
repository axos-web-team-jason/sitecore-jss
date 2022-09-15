import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';
import styles from './TertiaryBlock.module.css';

type TertiaryBlockProps = ComponentProps & {
  fields: {
    preHeader: Field<string>;
    mainHeader: Field<string>;
    body: Field<string>;
    linkText: Field<string>;
    color: string;
  };
};

const blockColor = (props: TertiaryBlockProps) => {
  const prefix = `${styles.primaryBlock}`;
  if (props.fields.color === 'primaryStyle') {
    return `${prefix}`;
  } else if (props.fields.color === 'lightStyle') {
    return `${prefix} ${styles.lightBlock}`;
  } else {
    return `${prefix} ${styles.darkBlock}`;
  }
};

const preHeaderColor = (props: TertiaryBlockProps) => {
  const prefix = `${styles.preHeader}`;
  if (props.fields.color === 'primaryStyle' || props.fields.color === 'lightStyle') {
    return `${prefix}`;
  } else {
    return `${prefix} ${styles.lightText}`;
  }
};

const headerColor = (props: TertiaryBlockProps) => {
  const prefix = `${styles.mainHeader}`;
  if (props.fields.color === 'primaryStyle' || props.fields.color === 'lightStyle') {
    return `${prefix}`;
  } else {
    return `${prefix} ${styles.darkText}`;
  }
};

const bodyColor = (props: TertiaryBlockProps) => {
  const prefix = `${styles.bodyWrapper}`;
  if (props.fields.color === 'primaryStyle' || props.fields.color === 'lightStyle') {
    return `${prefix}`;
  } else {
    return `${prefix} ${styles.whiteBody}`;
  }
};

const linkColor = (props: TertiaryBlockProps) => {
  const prefix = `${styles.container} ${styles.linkContainer}`;
  if (props.fields.color === 'primaryStyle' || props.fields.color === 'lightStyle') {
    return `${prefix}`;
  } else {
    return `${prefix} ${styles.secondaryMode} ${styles.secondaryText}`;
  }
};

const arrowColor = (props: TertiaryBlockProps) => {
  const prefix = `${styles.container} ${styles.centerLinkContainer}`;
  if (props.fields.color === 'primaryStyle' || props.fields.color === 'lightStyle') {
    return `${prefix}`;
  } else {
    return `${prefix} ${styles.secondaryMode} `;
  }
};

const TertiaryBlock = (props: TertiaryBlockProps): JSX.Element => (
  <>
    <div className={blockColor(props)}>
      <div className={preHeaderColor(props)}>
        <span>
          <Text field={props.fields.preHeader} />
        </span>
      </div>
      <div className={headerColor(props)}>
        <Text field={props.fields.mainHeader} />
      </div>
      <div className={bodyColor(props)}>
        <p>
          <Text field={props.fields.body} />
        </p>
      </div>
      <div className={arrowColor(props)}>
        <Link href="/" passHref>
          <a className={linkColor(props)}>
            <Text field={props.fields.linkText} />
          </a>
        </Link>
      </div>
    </div>
  </>
);

export default withDatasourceCheck()<TertiaryBlockProps>(TertiaryBlock);
