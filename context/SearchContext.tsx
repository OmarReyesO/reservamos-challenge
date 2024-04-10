import React, { createContext, useEffect, useState } from "react"

interface ResultType {
  selectedResult: {}
  selectResult: ({}) => void
}

export const SearchContext = createContext<ResultType | undefined>(undefined)

export const SearchProvider = ({ children }) => {
  const [selectedResult, setSelectedResult] = useState(null)

  const selectResult = (res: {}) => {
    setSelectedResult(res)
  }

  return (
    <SearchContext.Provider value={{ selectedResult, selectResult }}>
      {children}
    </SearchContext.Provider>
  )
}
