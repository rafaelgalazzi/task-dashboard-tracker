import { BaseForm } from '../../components/Form/BaseForm';
import { BaseInput } from '../../components/Form/BaseInput';
import BaseCard from '../../components/Layout/BaseCard';
import BaseText from '../../components/Text/BaseText';

export function ProjectCreate() {
  return (
    <div>
      <div className="flex">
        <BaseCard className="w-full">
          <BaseText className="text-2xl font-bold mb-4">Create a project</BaseText>
          <BaseForm>
            <BaseInput label='Name' placeholder='Enter the project name:' />
            <BaseInput label='Description' placeholder='Enter the project description:' />
          </BaseForm>
        </BaseCard>
      </div>
    </div>
  );
}
