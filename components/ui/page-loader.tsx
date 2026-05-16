import { Spinner } from "@/components/ui/spinner";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background gap-5">
      <Spinner className="size-12 border-[3px] text-brand-primary-dark" />
      <p className="font-heading text-brand-primary-dark text-base tracking-widest uppercase">
        Loading...
      </p>
    </div>
  );
}
