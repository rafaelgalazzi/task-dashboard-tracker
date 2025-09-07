import BaseCard from '../../components/Layout/BaseCard';
import { BasePaginationTable } from '../../components/Table/BasePaginationTable';
import BaseText from '../../components/Text/BaseText';

interface User {
  name: string;
  description: string;
}

export function HomePage() {
  function changePageHandler() {
    return;
  }

  const items: User[] = [
    {
      name: 'batata',
      description: 'teste',
    },
    {
      name: 'batata',
      description: 'teste',
    },
    {
      name: 'batata',
      description: 'teste',
    },
  ];

  const columns: (keyof User)[] = ['name', 'description'];

  return (
    <div>
      <BaseText className="text-2xl font-bold">Projects</BaseText>
      <div className="flex">
        <BaseCard className="md:w-1/2 w-full">
          <BasePaginationTable
            columns={columns}
            items={items}
            page={1}
            pageSize={10}
            total={0}
            onPageChange={changePageHandler}
          />
        </BaseCard>
      </div>
    </div>
  );
}
