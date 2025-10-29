import { Skeleton } from "../ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-6xl glass-hero p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content Skeleton */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-14 w-64" />
              <Skeleton className="h-10 w-56" />
            </div>
            <Skeleton className="h-24 w-full" />
            <div className="flex flex-wrap gap-4">
              <Skeleton className="h-14 w-48" />
              <Skeleton className="h-14 w-36" />
            </div>
          </div>

          {/* Right: 3D Scene Skeleton */}
          <Skeleton className="h-[400px] lg:h-[500px] rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
