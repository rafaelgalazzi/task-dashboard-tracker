import { useState } from 'react';
import BaseButton from '../../components/Button/BaseButton';
import { BaseForm } from '../../components/Form/BaseForm';
import { BaseInput } from '../../components/Form/BaseInput';
import BaseCard from '../../components/Layout/BaseCard';
import BaseText from '../../components/Text/BaseText';
import { useCreateProject } from '../../hooks/projects/UseCreateProject';
import type { CreateProjectForm } from '../../types/Projects';
import { useSnackbar } from '../../hooks/ui/useSnackbar';
import { useNavigate } from 'react-router-dom';

export function ProjectCreate() {
  const [form, setForm] = useState<CreateProjectForm>({ name: '', description: '' });
  const { createProject, createProjectIsPending, creasteProjectError } = useCreateProject();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleCreateProject = () => {
    createProject(form, {
      onSuccess: () => {
        showSnackbar({ message: 'Project created!', type: 'success' });
        navigate('/projects');
      },
      onError: () => {
        showSnackbar({ message: `Error creating project: ${creasteProjectError?.message}` });
      },
    });
    return;
  };

  const handleChangeForm = (form: CreateProjectForm) => {
    setForm(form);
  };

  const handleCancelAndGoBack = () => {
    navigate('/projects');
  };

  return (
    <div>
      <div className="flex justify-center">
        <BaseCard className="w-full">
          <BaseText className="text-2xl font-bold mb-4">Create a project</BaseText>
          <BaseForm>
            <BaseInput
              label="Name"
              placeholder="Enter the project name:"
              onChange={(name) => handleChangeForm({ ...form, name })}
            />
            <BaseInput
              label="Description"
              placeholder="Enter the project description:"
              onChange={(description) => handleChangeForm({ ...form, description })}
            />
          </BaseForm>
          <div className="flex justify-center">
            <BaseButton className="mx-2" onClick={handleCreateProject} loading={createProjectIsPending}>
              Crete Project
            </BaseButton>
            <BaseButton className="mx-2" onClick={handleCancelAndGoBack} loading={createProjectIsPending}>
              Cancel
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>
  );
}
