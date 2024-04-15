import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput(event.target.value)
    }
  }

  const onClickClearFilters = () => {
    const {clickedClearFilters} = props
    clickedClearFilters()
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          value={searchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoryItems = () => {
    const {categoryOptions} = props

    return (
      <>
        <h1 className="filter-heading">Category</h1>
        <ul className="category-items-container">
          {categoryOptions.map(eachCategory => {
            const {clickedCategoryItem, activeCategoryId} = props
            const isActiveCategoryItem =
              eachCategory.categoryId === activeCategoryId
            const categoryStyleClassName = isActiveCategoryItem
              ? 'category-style-button'
              : 'category-button'

            const onClickCategoryItem = () => {
              clickedCategoryItem(eachCategory.categoryId)
            }

            return (
              <li key={eachCategory.categoryId}>
                <button
                  type="button"
                  className={categoryStyleClassName}
                  onClick={onClickCategoryItem}
                >
                  {eachCategory.name}
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderRatingItems = () => {
    const {ratingsList} = props

    return (
      <>
        <h1 className="filter-heading">Rating </h1>
        <ul className="rating-items-container">
          {ratingsList.map(eachRating => {
            const {clickedRatingButton, activeRatingId} = props

            const isActiveRatingItem = eachRating.ratingId === activeRatingId

            const ratingsStyleClassName = isActiveRatingItem
              ? 'styled-and-up-text'
              : 'and-up-text'

            const onClickRatingButton = () => {
              clickedRatingButton(eachRating.ratingId)
            }
            return (
              <li key={eachRating.ratingId} className="rating-item">
                <button
                  type="button"
                  className="ratings-button"
                  onClick={onClickRatingButton}
                >
                  <img
                    src={eachRating.imageUrl}
                    alt={ratingsList.ratingId}
                    className="rating-icon"
                  />
                  <p className={ratingsStyleClassName}>& Up</p>
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const renderClearFilters = () => (
    <>
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryItems()}
      {renderRatingItems()}
      {renderClearFilters()}
    </div>
  )
}

export default FiltersGroup
