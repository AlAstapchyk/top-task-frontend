import React, { useEffect, useRef, useState } from "react";

interface InputFieldDecoratedProps {
  isOneParagraph: boolean;
  placeholder?: string;
  value?: string;
  onChange?: void;
}

const InputFieldDecorated = ({
  isOneParagraph = false,
  placeholder,
  value,
  onChange,
}: InputFieldDecoratedProps) => {
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
    window.getSelection()?.removeAllRanges();
  };

  useEffect(() => {
    if (value !== "" && value !== undefined && value !== null) {
      if (divRef.current?.textContent) {
        console.log(value);
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

  return (
    <div
      className="input-field-decorated"
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

export default InputFieldDecorated;
