import WorkDetailHeader from '../../pages/Work/components/workDetail/WorkDetailHeader';

interface WorkDetailHeaderLayoutProps {
  children: React.ReactNode;
}

const WorkDetailHeaderLayout = ({ children }: WorkDetailHeaderLayoutProps) => {
  return (
    <>
      <WorkDetailHeader />
      {children}
    </>
  );
};

export default WorkDetailHeaderLayout;
