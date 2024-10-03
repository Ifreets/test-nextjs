import { Accordion } from "@/components/Accordion";

export const FAQ = ({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) => {
  return (
    <Accordion label={question} active={true}>
      <span dangerouslySetInnerHTML={{ __html: String(children) }} />
    </Accordion>
  );
};
