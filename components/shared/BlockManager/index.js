import Hero from '../../blocks/Hero';
import Features from '../../blocks/Features';
import { useRouter } from 'next/dist/client/router';
import Services from '../../blocks/Services';

const getBlockComponent = ({ __component, ...rest }) => {
  let Block;
  switch (__component) {
    case 'secions.hero':
      Block = Hero;
      break;
    case 'secions.features':
      Block = Features;
      break;
    case 'secions.services':
      Block = Services;
      break;
    default:
      Block = () => <p>Component not created: {__component}</p>;
      break;
  }

  return Block ? <Block {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        router.asPath === '/home' ? 'home-page-wrap' : 'page-wrap'
      }`}
    >
      {blocks.map((block, index) =>
        getBlockComponent(
          block,
          index
        )
      )}
    </div>
  );
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
