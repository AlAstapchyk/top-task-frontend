import React, { useEffect, useRef, useState } from "react";

interface InputFieldProps {
  isMultipleParagraphs?: boolean;
  isTextDecoration?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: void;
}

const InputField = ({
  isMultipleParagraphs = false,
  isTextDecoration = false,
  placeholder,
  value,
  onChange
}: InputFieldProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState<string>();

  const [placeholderElement, setPlaceholderElement] =
    useState<HTMLSpanElement>();

  const onInput = (event: React.FormEvent<HTMLDivElement>) => {
    if(event.currentTarget.textContent !== null)
      setText(event.currentTarget.textContent);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !isMultipleParagraphs) {
      event.preventDefault();
    } else if (
      !isTextDecoration &&
      (event.ctrlKey || event.metaKey) &&
      (event.key === "B" ||
        event.key === "I" ||
        event.key === "U" ||
        event.key === "b" ||
        event.key === "i" ||
        event.key === "u")
    ) {
      event.preventDefault();
    }
  };
  const OnPaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    let text = event.clipboardData.getData("text/plain");
    if (!isMultipleParagraphs) text = text.replace(/[\r\n]+/g, ""); // Remove line breaks
    document.execCommand("insertText", false, text);
    setText(text);
  };
  const onFocus = () => {
    if (
      divRef.current &&
      (text === "" || text === undefined || text === null)
    ) {
      console.log("focus");
      divRef.current.innerHTML = "";
    }
  };
  const onBlur = () => {
    if (
      divRef.current &&
      placeholderElement &&
      (text === "" || text === undefined || text === null)
    ) {
      console.log("blur");
      divRef.current.appendChild(placeholderElement);
    }
  };

  useEffect(() => {
    if(value)
      setText(value);
    if (placeholder) {
      const newPlaceholderElement = document.createElement("span");
      newPlaceholderElement.className = "placeholder";
      newPlaceholderElement.textContent = placeholder;
      setPlaceholderElement(newPlaceholderElement);
      console.log(placeholderElement);

      if (divRef.current) {
        console.log("blur");
        divRef.current.appendChild(newPlaceholderElement);
      }
    }
  }, []);

  useEffect(() => {
    console.log("value = " + text);
  }, [value]);

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
    />
  );
};

export default InputField;
