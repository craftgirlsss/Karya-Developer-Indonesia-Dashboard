import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <DashboardSkeleton />
    </div>
  );
}