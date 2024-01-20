// import { Component } from "react";
import Faq from "react-faq-component";
import Reveal from "./Reveal";

const data = {
  rows: [
    {
      title: "1. What is a Hackathon?",
      content:
        "A hackathon is a dynamic coding experience. It's like a marathon where programmers trade their sleep for pizza, energy drinks, and zero errors at run-time. ",
    },
    {
      title: "2. Is this an online event?",
      content:
        "Our hackathon is conducted on-site, at Nitte Meenakshi Institute of Technology, Bengaluru. We’re far too hot to stay online ;)",
    },
    {
      title: "3. Who can participate?",
      content:
        "Registration is open to undergraduates. If you can code, you’re in. If not, bring snacks… we’ll find a use for you :)",
    },
    {
      title: "4. How can I get involved?",
      content:
        "Register your team through Devfolio to submit your project idea and secure your spot. Follow us on our social media handles to stay up to date.",
    },
    {
      title: "5. What is the limit on the team size?",
      content:
        "A team can have a maximum of 4 participants. We also accept individual registrations from the lone wolves out there.",
    },
    {
      title: "6. Is there a registration fee?",
      content:
        "Nil. Naught. Nada. Throughout the duration of the hackathon, we provide excellent hospitality to all participants, free of charge.",
    },

    {
      title: "7. Is there free WiFi?",
      content: "Duh…of course there is.",
    },
    {
      title: "8. Do I have to give a project demo?",
      content:
        "Yes. Teams have to demonstrate the working of their project before the jury. Just don’t burn the place down.",
    },
    {
      title: "9. What is the evaluation criteria?",
      content:
        "An independent jury will score the participants based on the relevance, feasibility, implementation, presentation, and creativity of their project.",
    },
    {
      title: "10. Can I submit a project I’ve worked on before the event?",
      content:
        "No. That would be grounds for disqualification. So would “rick-rolling” in any manner or form. Come on, you’re better than that.",
    },
  ],
};

const styles = {
  bgColor: "#101010",
  titleTextColor: "#f84611",
  rowTitleFontWeight: "bold",
  rowTitleColor: "#f84611",
  rowContentColor: "white",
  arrowColor: "#f84611",
  // rowTitleTextSize: "20px",
};

const config = {
  animate: true,
  tabFocus: true,
  openOnload: 0,
  expandIcon: "➕",
  collapseIcon: "➖",
};

function FAQ() {
  return (
    <div className="bg-[#101010]  py-[90px]">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white pb-5">
          FAQ
        </h1>
      </Reveal>
      <div className="w-[80%] mx-auto ">
        <Faq
          data={data}
          styles={styles}
          config={config}
          className="faqClass lg:text-xl"
        />
      </div>
      <div className="w-[80%] mx-auto text-white mt-3 font-sans">
        Did we miss anything? Shoot your questions over to us at{" "}
        <span className="text-secondary font-semibold">
          hackathon@nmit.ac.in
        </span>
        . We’ll get back to you in a flash!
      </div>
    </div>
  );
}

export default FAQ;
