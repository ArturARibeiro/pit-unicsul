// Types
import {SelectProps} from "./Select.types";

// Components
import Each from "@common/presentation/components/atoms/Each";
import Radio from "@common/presentation/components/atoms/Radio";

// Styled components
import {
  StyledSelect,
  StyledSelectCaption,
  StyledSelectItem,
  StyledSelectLabel,
  StyledSelectName
} from "./Select.styles";

const Select = ({value, items, onChange}: SelectProps) => {

  const handleOnChange = (value: string) => {
    onChange?.(value);
  }

  return items.length > 0 && (
    <StyledSelect>
      <Each data={items} render={item => (
        <StyledSelectItem>
          <StyledSelectLabel>
            <div className="d-flex flex-column">
              <StyledSelectName children={item.name}/>
              {Boolean(item.caption) && (
                <StyledSelectCaption children={item.caption}/>
              )}
            </div>
            <Radio
              value={value}
              checked={item.value == value}
              onChange={() => handleOnChange(item.value)}
              onClick={() => handleOnChange(item.value)}
            />
          </StyledSelectLabel>
        </StyledSelectItem>
      )}/>
    </StyledSelect>
  )
}

export default Select;