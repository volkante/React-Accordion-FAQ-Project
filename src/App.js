import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={element.title}
          num={index}
          key={element.title}
        >
          {element.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test"
        num={23}
        key={4343}
      >
        deneme12 deneme deneme deneme deneme deneme4232
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ children, title, num, curOpen, onOpen }) {
  function handleToggle() {
    onOpen(
      num === curOpen ? null : num
    ); /* num===curOpen'ı bir değişkene atayabilirsin. aşağıdaki commentout kısmında isOpen yaptı Schmedtmann. */
  }

  return (
    <div
      className={`item ${num === curOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{num === curOpen ? "-" : "+"}</p>
      {num === curOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

/* import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={element.title}
          num={index}
          key={element.title}
        >
          {element.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test"
        num={23}
        key={4343}
      >
        deneme12 deneme deneme deneme deneme deneme4232
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ children, title, num, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
} */
