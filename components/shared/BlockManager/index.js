import Hero from '../../blocks/Hero';
import Features from '../../blocks/Features';
import Services from '../../blocks/Services';
import Skillbar from '../../blocks/Skillbar';
import Testimonials from '../../blocks/Testimonials';
import Panels from '../../blocks/Panels'
import { useRouter } from 'next/dist/client/router';


const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;
  switch (__component) {
    case 'sections.hero':
      Block = Hero;
      break;
    case 'sections.features':
      Block = Features;
      break;
    case 'sections.services':
      Block = Services;
      break;
    case 'sections.panels':
      Block = Panels;
      break;
    case 'sections.skillbar':
      Block = Skillbar;
      break;
    case 'sections.testimonials':
      Block = Testimonials;
      break;
    default:
      Block = () => <p>Component not created: {__component}</p>;
      break;
  }

  return Block ? <Block key={index} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        router.asPath === '/' ? 'home-page-wrap' : 'page-wrap'
      }`}
    >
      {blocks.Blocks.map((block, index) => getBlockComponent(block, index))}
    </div>
  );
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;
