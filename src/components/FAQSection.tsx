import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

export function FAQSection() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Frequently Asked Questions</h1>
    <Accordion type="single" collapsible className="mt-12">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is Homie free ?</AccordionTrigger>
        <AccordionContent>
          Yes, Homie is totally free !
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is this project open source ?</AccordionTrigger>
        <AccordionContent>
          Yes, you can find it here <a href="https://github.com/FlorianM-C22/homie">https://github.com/FlorianM-C22/homie</a>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do I need to be familiar with server infrastructure to run my homelab ?</AccordionTrigger>
        <AccordionContent>
          No. Check the <a href="/docs" className="text-red-500 underline">documentation</a> for a full step by step guide.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default FAQSection;
