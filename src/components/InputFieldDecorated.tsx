import React, { useEffect, useRef, useState } from "react";

interface InputFieldDecoratedProps {
  isOneParagraph?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (newValue: string) => void;
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

  const setContentDefault = (newPlaceholderElement: HTMLSpanElement) => {
    if (divRef.current) {
      if (value !== "" && value !== undefined && value !== null)
        divRef.current.innerHTML = value;
      else {
        divRef.current.innerHTML = "";
        divRef.current.appendChild(newPlaceholderElement);
      }
    }
  };
  const onMouseDown = () => {
    const clearPlaceholder = () => {
      if (
        divRef.current &&
        (text === "" || text === undefined || text === null)
      ) {
        divRef.current.innerHTML = "";
      }
    };

    clearPlaceholder();
  };

  const onInput = () => {
    if (divRef.current) {
      setText(divRef.current.innerHTML);
    }
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
    // placeholderElement && setContentDefault(placeholderElement);
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
    callbackOnChange();
  };

  const callbackOnChange = () => {
    if (onChange && text !== undefined)
      text === "<br>" ? onChange("") : onChange(text);
    window.getSelection()?.removeAllRanges();
  };

  useEffect(() => {
    if (placeholder) {
      const newPlaceholderElement = document.createElement("span");
      newPlaceholderElement.className = "placeholder non-clickable";
      newPlaceholderElement.textContent = placeholder;
      setPlaceholderElement(newPlaceholderElement);

      setContentDefault(newPlaceholderElement);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        divRef.current.blur();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  useEffect(() => {
    setText(value);

    if (placeholderElement) setContentDefault(placeholderElement);
    window.getSelection()?.removeAllRanges();
  }, [value]);

  return (
    <div
      className="input-field-decorated input-field"
      contentEditable={true}
      ref={divRef}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      onPaste={OnPaste}
      onInput={onInput}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default InputFieldDecorated;
