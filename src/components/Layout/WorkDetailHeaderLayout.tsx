import { Outlet } from 'react-router-dom';
import WorkDetailHeader from '../../pages/Work/components/WorkDetailHeader';

const WorkDetailHeaderLayout = () => {
  return (
    <>
      {/* <WorkDetailHeader /> */}
      <Outlet />
    </>
  );
};

export default WorkDetailHeaderLayout;
