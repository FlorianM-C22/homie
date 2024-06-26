import { BorderBeam } from "@/components/ui/border-beam";

export function BorderBeamComponent() {
  return (
    <div className="relative rounded-xl">
      <img
        src="/img/DashboardScreen.png"
        alt="Hero Image"
        className="hidden w-full h-full rounded-[inherit] border object-contain shadow-lg dark:block"
      />
      <img
        src="/img/DashboardScreen.png"
        alt="Hero Image"
        className="block w-full h-full rounded-[inherit] border object-contain shadow-lg dark:hidden"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
