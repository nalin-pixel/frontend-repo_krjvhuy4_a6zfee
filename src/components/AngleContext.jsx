import React, { createContext, useContext, useState, useMemo } from 'react'

const AngleContext = createContext({ angle: 0, setAngle: () => {} })

export function AngleProvider({ children }) {
  const [angle, setAngle] = useState(0)
  const value = useMemo(() => ({ angle, setAngle }), [angle])
  return <AngleContext.Provider value={value}>{children}</AngleContext.Provider>
}

export function useAngle() {
  return useContext(AngleContext)
}
