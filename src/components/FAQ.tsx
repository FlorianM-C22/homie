import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Is Homie free ?",
    answer:
      "Yes ! Homie is a free service, you can use it without any limitations or extra cost.",
    link: "/signup",
  },
  {
    question: "Is Homie open-source ?",
    answer:
      "Definitely, feel free to star our GitHub repository and contribute to the project. ❤️",
    link: "http://github.com/FlorianM-C22/homie",
  },
  {
    question: "Do I need specific knowledge to deploy my homelab ?",
    answer:
      "No you don't. Homie is specifically designed to provide step by step documentation and tools to deploy your homelab as easily as possible.",
    link: "/docs",
  },
  {
    question: "Why did you build Homie ?",
    answer:
      "This is my end-of-studies project. I wanted to create a tool that would help people deploy their homelab with few technical knowledge since I struggled a lot building mine. A homelab is a great way to learn new technologies, every developper should have one in my opinion so I thought it would be a great idea to help people build theirs 😊",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Please reach out to me.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
