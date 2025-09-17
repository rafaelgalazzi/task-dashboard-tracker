import BaseCard from '../../components/Layout/BaseCard';
import { BasePaginationTable } from '../../components/Table/BasePaginationTable';
import BaseText from '../../components/Text/BaseText';
import type { User } from '../../types/User';

export function ProjectList() {
  function changePageHandler() {
    return;
  }

  const items: User[] = [];

  const columns: (keyof User)[] = [];

  return (
    <div>
      <div className="flex">
        <BaseCard className="w-full">
          <BaseText className="text-2xl font-bold mb-4">Projects</BaseText>
          <BasePaginationTable
            columns={columns}
            items={items}
            page={1}
            pageSize={10}
            total={1}
            onPageChange={changePageHandler}
          />
        </BaseCard>
      </div>
    </div>
  );
}
