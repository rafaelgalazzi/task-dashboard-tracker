import { useState } from 'react';
import BaseCard from '../../components/Layout/BaseCard';
import { BasePaginationTable } from '../../components/Table/BasePaginationTable';
import BaseText from '../../components/Text/BaseText';
import type { Projects } from '../../types/Projects';
import { useListProjects } from '../../hooks/projects/useListProjects';
import type { PaginationForm } from '../../types/Pagination';

export function ProjectList() {
  const [projectForm] = useState<PaginationForm<Projects>>({
    page: 1,
    pageSize: 10,
    search: '',
    order: { by: 'id', direction: 'DESC' },
  });

  const { projects } = useListProjects(projectForm);
  function changePageHandler() {
    return;
  }

  const columns: { name: keyof Projects }[] = [
    {
      name: 'name',
    },
    {
      name: 'description',
    },
  ];

  return (
    <div>
      <div className="flex">
        <BaseCard className="w-full">
          <BaseText className="text-2xl font-bold mb-4">Projects</BaseText>
          <BasePaginationTable
            columns={columns}
            items={projects?.items || []}
            page={projects?.page || 1}
            pageSize={projects?.pageSize || 10}
            total={projects?.total || 0}
            onPageChange={changePageHandler}
          />
        </BaseCard>
      </div>
    </div>
  );
}
