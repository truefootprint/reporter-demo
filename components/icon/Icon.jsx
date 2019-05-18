import getConfig from 'next-server/config';
const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;

const Icon = ({ src, type }) => (
  <link href={`${assetPrefix}${src}`} rel={type} />
);

export default Icon;
