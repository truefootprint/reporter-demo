import getConfig from 'next-server/config';
const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;

const Image = ({ src, ...rest }) => (
  <img src={`${assetPrefix}${src}`} {...rest} />
);

export default Image;
