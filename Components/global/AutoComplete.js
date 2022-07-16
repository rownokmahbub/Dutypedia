import { useState } from "react";
import { Input } from "./Input";

const AutoComplete = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const userInput = e.target.value;
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onFocus = () => {
    const userInput = "";
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput("");
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setInput(filteredSuggestions[activeSuggestionIndex]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const SuggestionsListComponent = () => {
    return (
      filteredSuggestions.length > 0 && (
        <ul className="suggestions border px-2 max-h-36 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }

            return (
              <li
                className={`p-1 border-b cursor-pointer ${
                  index === activeSuggestionIndex && ""
                }`}
                key={suggestion}
                onClick={onClick}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      )
    );
  };

  return (
    <>
      <Input
        type="text"
        name="hgh"
        className="w-full py-2 px-2 rounded bg-[#f8fafb] border border-solid focus:outline-none border-gray-300"
        onFocus={onFocus}
        // onBlur={() => setShowSuggestions(false)}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && <SuggestionsListComponent />}
    </>
  );
};

export default AutoComplete;
