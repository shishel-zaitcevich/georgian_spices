import { HOMEMODALDATA } from '@/constants/constants';
import SpiceDetails from './SpiceDetails';

const SpiceList: React.FC = () => {
  return (
    <>
      {HOMEMODALDATA.map((collection, index) => (
        <SpiceDetails
          key={index}
          title={collection.title}
          price={collection.price}
          description={collection.description}
          info={collection.info}
          spices={collection.spices}
        />
      ))}
    </>
  );
};

export default SpiceList;
