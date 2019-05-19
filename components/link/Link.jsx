import getConfig from 'next-server/config';
const { publicRuntimeConfig } = getConfig();
const assetPrefix = publicRuntimeConfig.assetPrefix;

const Link = ({ href, children, ...rest }) => (
  <a href={`${assetPrefix}${href}`} {...rest}>{children}</a>
);

export default Link;
