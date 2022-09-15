// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the TertiaryBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function TertiaryBlock(manifest: Manifest): void {
  manifest.addComponent({
    name: 'TertiaryBlock',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'preHeader', type: CommonFieldTypes.SingleLineText },
      { name: 'mainHeader', type: CommonFieldTypes.SingleLineText },
      { name: 'body', type: CommonFieldTypes.SingleLineText },
      { name: 'linkText', type: CommonFieldTypes.SingleLineText },
      { name: 'color', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
