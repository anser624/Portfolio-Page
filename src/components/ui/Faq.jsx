import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useContext } from "react";
import { themecontext } from "../../App"; 

const Faq = () => {
    const themecont = useContext(themecontext); 
    const { theme, toggleTheme } = themecont;

  return (
    <div className={`flex flex-col items-center justify-center h-screen
     ${theme==="dark"?"bg-gradient-to-br from-gray-950 to-blue-900":"bg-gradient-to-br from-gray-100 to-blue-400"}`}>
      <h1 className={`text-4xl font-bold 
      ${theme==="dark"?"bg-gradient-to-r from-cyan-400 to-blue-600":"bg-gradient-to-r from-cyan-600 to-blue-900"}
      animate-pulse bg-clip-text text-transparent mb-8`}>
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full max-w-2xl">
        <AccordionItem value="item-1" className="border-b border-gray-100">
          <AccordionTrigger className={`text-xl font-semibold ${theme==="dark"?"text-white":"text-black"}`}>
            How quickly do you respond to messages
          </AccordionTrigger>
          <AccordionContent className={` ${theme==="dark"?"text-gray":"text-black"}`}>
            I typically reply within 24 hours on weekdays. For urgent inquiries,
            please mention 'URGENT' in your message and I'll prioritize your
            request.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-gray-100">
          <AccordionTrigger className={`text-xl font-semibold ${theme==="dark"?"text-white":"text-black"}`}>
            Do you work with international clients?
          </AccordionTrigger>
          <AccordionContent className={` ${theme==="dark"?"text-gray":"text-black"}`}>
            Absolutely! I have experience working with clients across multiple
            timezones. I'm flexible with communication hours and accept payments
            in multiple currencies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-gray-100">
          <AccordionTrigger className={`text-xl font-semibold ${theme==="dark"?"text-white":"text-black"}`}>
            What's your typical project turnaround time?
          </AccordionTrigger>
          <AccordionContent className={` ${theme==="dark"?"text-gray":"text-black"}`}>
            Standard projects take 2-4 weeks depending on complexity. However, I
            can provide a more accurate timeline after discussing your specific
            requirements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
