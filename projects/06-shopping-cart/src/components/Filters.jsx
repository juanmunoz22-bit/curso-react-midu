import { useId } from "react"
import './Filters.css'
import { useFilters } from "../hooks/useFilters"

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type="range"
          id={'price'}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <output>${filters.minPrice}</output>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='furniture'>Furniture</option>
          <option value='fragrances'>Fragances</option>
          <option value='groceries'>Grocery</option>
        </select>
      </div>

    </section>
  )
}