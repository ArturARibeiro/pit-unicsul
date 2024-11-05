import {forwardRef, useState} from "react";

// Types
import {SelectOption, SelectProps} from "./Select.types";

// Components
import Each from "@common/presentation/components/atoms/Each";

// Styled components
import {
  StyledSelectBox,
  StyledSelectDropdown,
  StyledSelectInput,
  StyledSelectOption,
  StyledSelectOptions,
  StyledSelectSearch,
} from "./Select.styles";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options = [], placeholder, ...rest }, ref) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<SelectOption | null>(
      options.find((o) => o.value === rest.value) ?? null
    );

    const filteredOptions = options.filter((option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectOption = (option: SelectOption) => {
      setSearchTerm(""); // Limpa o campo de busca ao selecionar
      setSelected(option.value === selected?.value ? null : option);
      setIsOpen(false); // Fecha o dropdown após selecionar
    };

    const toggleDropdown = () => {
      setIsOpen(prev => !prev);
      setSearchTerm("");
    };

    const handleInputClick = () => {
      toggleDropdown();
    };

    return (
      <StyledSelectBox>
        <select {...rest} ref={ref} hidden value={selected?.value || ""}>
          <Each
            data={options}
            render={(option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            )}
          />
        </select>

        <StyledSelectInput
          value={selected?.name || ""}
          placeholder={placeholder}
          onClick={handleInputClick}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          readOnly
        />

        {isOpen && (
          <StyledSelectDropdown>
            <StyledSelectSearch
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <StyledSelectOptions role="listbox">
              <Each
                data={filteredOptions}
                render={(option) => (
                  <StyledSelectOption
                    key={option.value}
                    role="option"
                    $selected={option === selected}
                    aria-selected={option === selected}
                    onClick={() => handleSelectOption(option)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleSelectOption(option);
                      }
                    }}
                    tabIndex={0}
                  >
                    {option.name}
                  </StyledSelectOption>
                )}
              />
            </StyledSelectOptions>
          </StyledSelectDropdown>
        )}
      </StyledSelectBox>
    );
  }
);

export default Select;
