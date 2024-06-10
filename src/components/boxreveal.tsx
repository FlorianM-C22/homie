import BoxReveal from "@/components/ui/box-reveal";

import { Button } from "@/components/ui/button";

export async function BoxRevealDemo() {
  return (
    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#ef4444"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Homie<span className="text-[#ef4444]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#ef4444"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          is your homelab deployment{" "}
          <span className="text-[#ef4444]">assistant</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#ef4444"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; build a docker based homelab with
            <span className="font-semibold text-[#ef4444]"> Every service you need</span>
            . <br />
            -&gt; Its 100% open-source, and customizable ! <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#ef4444"} duration={0.5}>
        <a href="#features">
          <Button className="mt-[1.6rem] bg-[#ef4444]">Explore</Button>
        </a>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;
