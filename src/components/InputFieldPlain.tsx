import React, { useEffect, useRef, useState } from "react";

interface InputFieldPlainProps {
  isOneParagraph: boolean;
  isDecorated: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (newValue: string) => void;
}

const InputFieldPlain = ({
  isOneParagraph = true,
  isDecorated = false,
  placeholder,
  value,
  onChange,
}: InputFieldPlainProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState<string>();

  const [placeholderElement, setPlaceholderElement] =
    useState<HTMLSpanElement>();

  const onInput = (event: React.FormEvent<HTMLDivElement>) => {
    if (event.currentTarget.textContent !== null)
      setText(event.currentTarget.textContent);
  };
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && isOneParagraph) {
      event.preventDefault();
      if (event.key === "Enter")
        myFunction();
    } else if (
      !isDecorated &&
      (event.ctrlKey || event.metaKey) &&
      ["B", "I", "U"].includes(event.key.toUpperCase())
    ) {
      event.preventDefault();
    }
  };
  const OnPaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    let text = event.clipboardData.getData("text/plain");
    if (isOneParagraph) text = text.replace(/[\r\n]+/g, ""); // Remove line breaks
    document.execCommand("insertText", false, text);
    setText(text);
  };

  const onFocus = () => {
    if (
      divRef.current &&
      (text === "" || text === undefined || text === null)
    ) {
      divRef.current.innerHTML = "";
    }
  };
  const onBlur = () => {
    if (
      divRef.current &&
      placeholderElement &&
      (text === "" || text === undefined || text === null)
    ) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(placeholderElement);
    }
    myFunction();
    window.getSelection()?.removeAllRanges();
  };

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target as Node)
    ) {
      myFunction();
    }
  };

  const myFunction = () => {
    console.log("myFunction called!");

    if(onChange && text)
      onChange(text);

    if (divRef.current) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
      }
    }
  };

  useEffect(() => {
    if (value !== "" && value !== undefined && value !== null) {
      if (divRef.current) {
        divRef.current.textContent = value;
        setText(value);
      }
    }
    if (placeholder) {
      const newPlaceholderElement = document.createElement("span");
      newPlaceholderElement.className = "placeholder";
      newPlaceholderElement.textContent = placeholder;
      setPlaceholderElement(newPlaceholderElement);

      if (divRef.current && !value) {
        divRef.current.appendChild(newPlaceholderElement);
      }
    }
  }, []);

  // useEffect(() => {
  //   if (onChange && text) onChange(text);
  // }, [text]);

  return (
    <div
      className="input-field"
      contentEditable={true}
      ref={divRef}
      onKeyDown={onKeyDown}
      onPaste={OnPaste}
      onInput={onInput}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {value}
    </div>
  );
};

export default InputFieldPlain;
