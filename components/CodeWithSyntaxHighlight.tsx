import { useDarkModeProvider } from "@/contexts/DarkModeProvider";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/default-highlight";
import { gruvboxDark, hybrid } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type Props = {
  children: string | string[];
};

export const CodeWithSyntaxHighlight = (props: Props) => {
  const { isDarkMode } = useDarkModeProvider();

  return (
    <pre className="overflow-x-auto border-4 border-zinc-600 text-lg dark:border-black dark:bg-black">
      <SyntaxHighlighter language="javascript" style={isDarkMode ? gruvboxDark : hybrid}>
        {props.children}
      </SyntaxHighlighter>
    </pre>
  );
};
