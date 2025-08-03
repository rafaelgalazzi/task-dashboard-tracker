import BaseCard from '../../components/Layout/BaseCard';
import GridLayout from '../../components/Layout/GridLayout';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import BaseText from '../../components/Text/BaseText';

export default function HomePage() {
  const menus = [
    { name: 'Tasks', path: '/tasks' },
    { name: 'Projects', path: '/projects' },
    { name: 'Profile', path: '/profile' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <ScreenLayout>
      <BaseCard>
        <BaseText className="text-2xl font-bold">Home Dashboard</BaseText>
        <GridLayout className="mt-4">
          {menus.map((menu) => (
            <BaseCard key={menu.name} className="cursor-pointer">
              <BaseText className="text-lg">{menu.name}</BaseText>
            </BaseCard>
          ))}
        </GridLayout>
      </BaseCard>
    </ScreenLayout>
  );
}
