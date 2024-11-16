import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

// Types
import type {SearchProps} from "./Search.types";
import type {Product} from "@modules/product/types";

// Mocks
import products from "@modules/product/data/mocks/products.ts";

// Components
import Each from "@common/presentation/components/atoms/Each";

// Styled components
import {
  StyledSearchInput,
  StyledSearchLabel,
  StyledSearchList,
  StyledSearchListItem,
  StyledSearchListItemName,
  StyledSearchListItemPicture,
  StyledSearchListItemPrice,
  StyledSearchResult
} from "./Search.styles";

const Search = ({onChange, ...rest}: SearchProps) => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  const filtered = products.filter(product => {
    return product.name.toLowerCase().includes(value.toLowerCase());
  }).splice(0, 4);

  const handleOnSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange?.(event);
  }

  const handleGoToProductPage = (product: Product) => {
    navigate(`/products/${product.id}`);
  }

  const handleEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    
    if (event.key === "Enter") {
      navigate(`/products/search?search=${target.value}`);
    }
  }

  return (
    <StyledSearchLabel>
      <i className="bi bi-search"></i>
      <StyledSearchInput {...rest} value={value} onChange={handleOnSearch} onKeyDown={handleEnterKeyPress}/>

      {value.length >= 3 && (
        <StyledSearchResult>
          {filtered.length > 0 ? (
            <StyledSearchList>
              <Each data={filtered} render={product => (
                <StyledSearchListItem onClick={() => handleGoToProductPage(product)}>
                  <StyledSearchListItemPicture src={product.picture}/>
                  <StyledSearchListItemName children={product.name}/>
                  <StyledSearchListItemPrice
                    basePrice={product.basePrice}
                    promotionPrice={product.promotionPrice}
                  />
                </StyledSearchListItem>
              )}/>
            </StyledSearchList>
          ) : (
            <div className="text-center p-2">
              Nenhum produto encontrado
            </div>
          )}
        </StyledSearchResult>
      )}
    </StyledSearchLabel>
  )
}

export default Search