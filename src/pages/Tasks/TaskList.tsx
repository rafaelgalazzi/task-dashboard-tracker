// import { useNavigate } from 'react-router-dom';
import BaseCard from '../../components/Layout/BaseCard';
import BaseText from '../../components/Text/BaseText';

export function TaskList() {
  //   const navigate = useNavigate();

  return (
    <BaseCard showRibbon>
      <BaseText className="text-2xl font-bold">Task List</BaseText>
    </BaseCard>
  );
}
