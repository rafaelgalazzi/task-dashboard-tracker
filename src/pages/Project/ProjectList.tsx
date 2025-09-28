import { useState } from 'react';
import BaseCard from '../../components/Layout/BaseCard';
import { BasePaginationTable } from '../../components/Table/BasePaginationTable';
import BaseText from '../../components/Text/BaseText';
import type { Projects } from '../../types/Projects';
import { useListProjects } from '../../hooks/projects/useListProjects';
import type { PaginationForm } from '../../types/Pagination';
import { IconButton } from '../../components/Button/IconButton';
import { useNavigate } from 'react-router-dom';

export function ProjectList() {
  const navigate = useNavigate();
  const [projectForm] = useState<PaginationForm<Projects>>({
    page: 1,
    pageSize: 10,
    search: '',
    order: { by: 'id', direction: 'DESC' },
  });

  const { projects } = useListProjects(projectForm);

  const columns: { name: keyof Projects }[] = [
    {
      name: 'name',
    },
    {
      name: 'description',
    },
  ];

  function changePageHandler() {
    return;
  }

  const goToCreateProject = () => {
    navigate('/projects/create');
  };

  return (
    <div>
      <div className="flex">
        <BaseCard className="w-full">
          <div className="flex justify-end">
            <IconButton name="plus" circle onClick={goToCreateProject} />
          </div>
          <BaseText className="text-2xl font-bold mb-4">Projects</BaseText>
          <BasePaginationTable
            columns={columns}
            items={projects?.items || []}
            page={projects?.page || 1}
            pageSize={projects?.pageSize || 10}
            total={projects?.total || 0}
            onPageChange={changePageHandler}
            noItemsText="No projects created yet!"
          />
        </BaseCard>
      </div>
    </div>
  );
}
