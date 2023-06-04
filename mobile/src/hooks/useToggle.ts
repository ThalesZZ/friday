import React from 'react'

export default function useToggle(defaultValue = false) {
  const [active, setActive] = React.useState<boolean>(defaultValue)

  return React.useMemo(
    () => ({
      active,
      enabled: () => setActive(() => true),
      disabled: () => setActive(() => false),
      toggle: () => setActive((a) => !a),
      set: setActive,
    }),
    [active],
  )
}
